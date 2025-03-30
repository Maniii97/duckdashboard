import { Request, Response } from "express";
import handleChat from "../../utils/gemini";

const chatController = async (req: Request, res: Response) => {
  try {
    const question = req.body.question;
    const data = await handleChat(question);
    const response = {
      status: "success",
      data: data,
    };
    res.status(200).json(response);
  } catch (error) {
    console.log(
      "Error @/controllers/chat/chat.ts -> chatController : " +
        error
    );
    const response = {
      status: "error",
      message: "Server Error",
    };
    res.status(500).json(response);
  }
};

export default chatController;
