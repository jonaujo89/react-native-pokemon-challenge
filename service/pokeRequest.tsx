export const sendGetReq = async (params, callback, setState) => {
  try {
    const res = await callback(params);

    //could transform data here

    setState(res);
    return { status: "ok" };
  } catch (err) {
    console.log("Error happend. ", err.message);
    return { status: "error", message: err.message };
  }
};
