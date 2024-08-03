import { Module } from "@nestjs/common";
import { CepService } from "./cep/cep.service";
import { ImageService } from "./image/image.service";
import { ConfigModule } from "@nestjs/config";

@Module({
    imports: [
        ConfigModule.forRoot(),
    ],
    providers: [CepService, ImageService],
    exports: [CepService, ImageService],
})
export class ServicesModule {}