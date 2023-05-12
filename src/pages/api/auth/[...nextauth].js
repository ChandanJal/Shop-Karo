import NextAuth from "next-auth/next";
import CredentialProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialProvider({
      name: "Shop Karo",
      async authorize(credentials, req) {
        const payload = {
          username: credentials.username,
          password: credentials.password,
        };

        const res = await fetch("https://dummyjson.com/auth/login", {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
          },
        });

        const user = await res.json();
        if (!res.ok) throw new Error(user.message);

        console.log(user);

        if (res.ok && user) {
          return user;
        }

        return null;
      },
    }),
  ],
  secret: "thisisadummysecret",
  pages: {
    signIn: "login",
  },
  theme: {
    colorScheme: "light",
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (user && account) {
        return {
          ...token,
          user,
          account,
        };
      }

      return token;
    },

    async session({ session, token }) {
      // console.log("session", session);
      // console.log("token", token);
      session.account = token.user;

      session.user.name = `${token.user.firstName} ${token.user.lastName}`;

      return session;
    },
  },
});
