/* eslint-disable prefer-const */
import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import * as OneSignal from '@onesignal/node-onesignal';


// # ONE SIGNAL CONFIGURATION
const NEST_ONESIGNAL_APP_ID="89515878-02e5-49bf-943b-1c7fd2af3cfd"
const NEST_ONESIGNAL_REST_API_KEY="OGYwMjM4ZWItZDhkMS00NTU2LTlmZTItZDhkZTRkNmQ4NzIw"
const NEST_ONESIGNAL_USER_AUTH_KEY="M2RlNWMwNjYtMjEzZC00NDE3LWJhM2YtNmUxNzQ5YzliOTgz"


interface ICreateNotificationBody {
  name: string;
  header: string;
  content: string;
}

interface ICreateGroupNotificationBody {
  name: string;
  header: string;
  content: string;
  group?: string;
}

@Injectable()
export default class OneSignalService {
  private readonly oneSignal = OneSignal.createConfiguration({
    userAuthKey: NEST_ONESIGNAL_USER_AUTH_KEY,
    restApiKey: NEST_ONESIGNAL_REST_API_KEY,
  });
  private readonly oneSignalClient = new OneSignal.DefaultApi(this.oneSignal);
  private readonly logger: Logger;
  constructor() {
    this.logger = new Logger(OneSignalService.name);
  }

  async createNotificationToAll({
    name,
    content,
    header,
  }: ICreateNotificationBody) {
    try {
      let notification = {
        name: name.toString(),
        contents: {
          pt: content.toString(),
          en: content.toString(),
        },
        headings: {
          pt: header.toString(),
          en: header.toString(),
        },
        included_segments: ['All'],
        app_id: NEST_ONESIGNAL_APP_ID,
      };

      let send = await this.oneSignalClient.createNotification(notification);

      this.logger.debug(JSON.stringify(send));
      return send;
    } catch (error: any) {
      throw new HttpException(error.message, error.status);
    }
  }

  async createGroupNotification({
    group,
    name,
    content,
    header,
  }: ICreateGroupNotificationBody) {
    try {
      let data = await this.oneSignalClient.createNotification({
        name: name.toString(),
        contents: {
          pt: content.toString(),
          en: content.toString(),
        },
        headings: {
          pt: header.toString(),
          en: header.toString(),
        },
        // included_segments: [group],
        app_id: NEST_ONESIGNAL_APP_ID,
        data: Date,
      });
      if (!data) {
        throw new HttpException(
          `Erro ao enviar notificação.`,
          HttpStatus.EXPECTATION_FAILED,
        );
      }

      this.logger.debug(JSON.stringify(data));
      return data;
    } catch (error: any) {
      throw new HttpException(error.message, error.status);
    }
  }

  async createSegmento() {
    try {
      const segmento = await this.oneSignalClient.createSegment(NEST_ONESIGNAL_APP_ID, {
        name: 'Segmento de teste',
        filters: [
          {
            field: 'tag',
            key: 'teste',
            relation: '=',
            value: '1'
          }
        ]
      });

      if (!segmento.success) {
        throw new HttpException(
          `Erro ao criar segmento.`,
          HttpStatus.EXPECTATION_FAILED,
        );
      }


      return segmento;

    } catch (error: any) {
      throw new HttpException(error.message, error.status);
    }
  }
}
