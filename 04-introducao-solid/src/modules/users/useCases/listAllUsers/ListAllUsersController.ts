import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;

    if (typeof user_id === 'string') {
      return response.json(this.listAllUsersUseCase.execute({ user_id }));
    }
    throw new Error('Deve ser passado uma string como id');
  }
}

export { ListAllUsersController };
