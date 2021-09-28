import { DesafioStatus } from '../interfaces/desafioStatus.enum';
import { IsOptional } from 'class-validator';

export class AtualizarDesafioDto {
  @IsOptional()
  //@IsDate()
  dataHoraDesafio: Date;

  @IsOptional()
  status: DesafioStatus;
}
