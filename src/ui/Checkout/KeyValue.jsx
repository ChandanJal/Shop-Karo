export default function KeyValue({ keyField = "", value }) {
  return (
    <>
      <div className="col-4 mt-2">
        <p className="m-0 fw-bold">{keyField}</p>
      </div>
      <div className="col-8 mt-2">
        <p className="m-0">{value}</p>
      </div>
    </>
  );
}
