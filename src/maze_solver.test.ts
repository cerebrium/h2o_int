import { maze_solver } from "./maze_solver";

test("maze solver, simple maze", () => {
  const testMaze = [
    ["#", "#", "#", "#", "#", "#", "#", "#", "E"],
    ["#", "#", "#", "#", "#", "#", "#", "#", ""],
    ["#", "#", "#", "#", "#", "#", "#", "#", ""],
    ["#", "#", "#", "#", "#", "#", "#", "#", ""],
    ["#", "#", "#", "#", "#", "#", "#", "#", ""],
    ["#", "#", "#", "#", "#", "#", "#", "#", ""],
    ["#", "#", "#", "#", "#", "#", "#", "#", ""],
    ["#", "#", "#", "#", "#", "#", "#", "#", ""],
    ["S", "", "", "", "", "", "", "", ""],
  ];
  const path = maze_solver(testMaze);

  expect(path).toBeTruthy();

  if (path) {
    // Check start
    const [start_x, start_y] = path[0];
    expect(testMaze[start_x][start_y]).toEqual("S");

    // Check end
    const [end_x, end_y] = path[path.length - 1];
    expect(testMaze[end_x][end_y]).toEqual("E");

    // Check length
    expect(path.length).toEqual(17);

    // Check no walls in between
    for (let i = 1; i < path.length - 1; i++) {
      const [x, y] = path[i];
      if (testMaze[x][y] === "#") {
        console.log("coords: ", x, y, "were #");
      }
      expect(testMaze[x][y]).toEqual("");
    }
  }
});

test("maze solver, complex maze", () => {
  const testMaze = [
    ["#", "#", "#", "#", "#", "#", "#", "E", "#"],
    ["", "#", "#", "#", "#", "", "#", "", ""],
    ["", "#", "", "#", "#", "", "#", "#", ""],
    ["", "#", "", "#", "#", "", "#", "#", ""],
    ["", "#", "", "", "", "", "#", "#", ""],
    ["", "#", "#", "#", "#", "", "#", "#", ""],
    ["", "#", "#", "#", "#", "", "#", "#", ""],
    ["", "#", "#", "#", "#", "", "#", "#", ""],
    ["S", "", "", "", "", "", "", "", ""],
  ];
  const path = maze_solver(testMaze);
  expect(path).toBeTruthy();
  if (path) {
    // Check start
    const [start_x, start_y] = path[0];
    expect(testMaze[start_x][start_y]).toEqual("S");

    // Check end
    const [end_x, end_y] = path[path.length - 1];
    expect(testMaze[end_x][end_y]).toEqual("E");

    // Check length
    expect(path.length).toEqual(18);

    // Check no walls in between
    for (let i = 1; i < path.length - 1; i++) {
      const [x, y] = path[i];
      if (testMaze[x][y] === "#") {
        console.log("coords: ", x, y, "were #");
      }
      expect(testMaze[x][y]).toEqual("");
    }
  }
});
