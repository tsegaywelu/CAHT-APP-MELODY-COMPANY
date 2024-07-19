import jwt from "jsonwebtoken";
const generetetokenAndsetcookie = (userId, res) => {
  const Token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  res.cookie("jwt", Token, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
    httpOnly: true, //prevent xss atack;
    samesite: "strict", //prevent from CSRF attcks
    secure: process.env.NODE_ENV !== "development",
  });
};

export default generetetokenAndsetcookie;
