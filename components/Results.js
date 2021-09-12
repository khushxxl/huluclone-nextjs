import Thumbnail from "./Thumbnail";

function Results({ requests }) {
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {requests.map((result) => (
        <Thumbnail result={result} key={result.id} />
      ))}
    </div>
  );
}

export default Results;
