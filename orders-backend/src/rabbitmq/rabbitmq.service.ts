import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

@Injectable()
export class RabbitService {
    constructor(
        @Inject('RABBITMQ_SERVICE') private readonly client: ClientProxy,
    ) {}

    sendEevent = async () => {
        const payload = { event: 'order_created', data: { userId: 1, name: 'Andres Farias' } };
        await this.client.emit('eato_order', payload);
    }
}