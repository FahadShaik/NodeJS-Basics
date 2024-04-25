import express from "express";

let router = express.Router();
//business logic
/**
 *API URL=http://127.0.0.1:7070/user/all
 */
router.get("/all", (req, resp) => {
  resp.send("User: all");
});
/**
 * API URL=http://127.0.0.1:7070/user/add

 */
router.post("/add", (req, resp) => {
  resp.send("User: new user");
});
/**
 * API URL=http://127.0.0.1:7070/user/update

 */
router.put("/update", (req, resp) => {
  resp.send("User: update user");
});
/**
 * API URL=http://127.0.0.1:7070/user/update

 */
router.delete("/delete", (req, resp) => {
  resp.send("User: delete");
});

export default router;
