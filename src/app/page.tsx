export default function Home() {
  return (
    <div>
      <div>
        Making A Tic Tac Toe Game using <span> React&Next.JS </span>{" "}
      </div>
      <div className="row1">
        <div className="board"></div>
      </div>
      <div>
        <button className="reset">Reset</button>
      </div>
    </div>
  );
}
