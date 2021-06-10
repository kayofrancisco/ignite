import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) { }

  handle(request: Request, response: Response): Response {
    const { name, email } = request.body;

    return response.status(201).json(this.createUserUseCase.execute({ name, email }));
  }
}

export { CreateUserController };
