import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { NotifyStatus } from 'src/shared/libs/types';

export class NotificationRdo {
  @Expose()
  @ApiProperty({
    description: 'Notification id',
    example: '1234-5678-1234',
  })
  public id: string;

  @Expose()
  @ApiProperty({
    description: 'Notification date',
    example: '01.01.2024',
  })
  @Type(() => Date)
  public notifyDate: Date;

  @Expose()
  @ApiProperty({
    description: 'Notified User Id',
    example: '1234-5678-1234',
  })
  public userId: string;

  @Expose()
  @ApiProperty({
    description: 'Notification text',
    example: 'Lorem ipsum',
  })
  public description: string;

  @Expose()
  @ApiProperty({
    description: 'Notification status',
    example: 'Sent',
    enum: NotifyStatus,
  })
  public notifyStatus: NotifyStatus;
}
