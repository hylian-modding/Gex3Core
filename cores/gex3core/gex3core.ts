import { ICore, IModLoaderAPI } from 'modloader64_api/IModLoaderAPI';
import SaveContext from './SaveContext';
import { Igex3core } from './API/Igex3core';

export default class gex3core implements ICore, Igex3core{
    header: string | string[] = "NX3";
    ModLoader!: IModLoaderAPI;
    heap_start: number = -1;
    heap_size: number = -1;
    save!: SaveContext;

    preinit(): void {
    }

    init(): void {
    }

    postinit(): void {
        this.save = new SaveContext(this.ModLoader);
    }

    onTick(frame?: number): void {
    }
}