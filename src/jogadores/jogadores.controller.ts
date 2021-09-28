import {
  Controller,
  Post,
  Param,
  Get,
  Delete,
  Put,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CriarJogadorDto } from './dtos/criarJogador.dto';
import { AtualizarJogadorDto } from './dtos/atualizarJogador.dto';
import { JogadoresService } from './jogadores.service';
import { Jogador } from './interfaces/jogador.interface';
import { ValidationParametersPipe } from 'src/common/pipes/validacaoParametros.pipe';

@Controller('api/v1/jogadores')
export class JogadoresController {
  constructor(private readonly jogadoresService: JogadoresService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async criarJogador(
    @Body() criarJogadorDto: CriarJogadorDto,
  ): Promise<Jogador> {
    return await this.jogadoresService.criarJogador(criarJogadorDto);
  }

  @Put('/:_id')
  @UsePipes(ValidationPipe)
  async atualizarJogador(
    @Param('_id') _id: string,
    @Body() atualizarJogador: AtualizarJogadorDto,
  ) {
    await this.jogadoresService.atualizarJogador(_id, atualizarJogador);
  }

  @Get()
  async consultarJogadores(): Promise<Jogador[]> {
    return this.jogadoresService.consultarTodosJogadores();
  }

  @Get('/:_id')
  async consultarJogador(
    @Param('_id', ValidationParametersPipe) _id: string,
  ): Promise<Jogador> {
    return this.jogadoresService.consultarJogadorPorId(_id);
  }

  @Delete('/:_id')
  async deletarJogador(
    @Param('_id', ValidationParametersPipe) _id: string,
  ): Promise<void> {
    this.jogadoresService.deletarJogador(_id);
  }
}
