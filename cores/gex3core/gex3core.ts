import { ICore, IModLoaderAPI, ILogger, ModLoaderEvents } from 'modloader64_api/IModLoaderAPI';
import { IRomHeader } from 'modloader64_api/IRomHeader';
import { bus, EventHandler } from 'modloader64_api/EventHandler';
import fs from 'fs';
import path from 'path';
import IMemory from 'modloader64_api/IMemory';
import SaveContext from './SaveContext';

export default class gex3core implements ICore{
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