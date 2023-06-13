const indexer = async ({ type, url }: IndexVideoRequest) => {
  let result: IndexVideoResult;

  try {
    // check if video is already indexed
    checkIfVideoIsIndexed({ type, url });
    // if yes, return success
    // if not, index it and return success

    result = { state: "successful", data: "" };
    return result;
  } catch (error) {
    console.error(error);
    result = { state: "failed", data: "An error occurred." };
    return result;
  }
};

export default indexer;

function checkIfVideoIsIndexed(arg0: { type: string; url: string }) {
  // call the database
  // check if video is indexed
  // if yes, return true
  // if not, return false
  // 
  throw new Error("Function not implemented.");
}
