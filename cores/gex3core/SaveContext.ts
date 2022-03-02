import { IModLoaderAPI } from 'modloader64_api/IModLoaderAPI';
import { ISaveContext } from './API/ISaveContext';

export default class SaveContext implements ISaveContext{

    ModLoader: IModLoaderAPI;

    constructor(ModLoader: IModLoaderAPI){
        this.ModLoader = ModLoader;
    }
//Will effect Pause screen counter, but not any level stats.
    get remote_count(): number{
        return this.ModLoader.emulator.rdramRead8(0x800A54EB);
    }

    set remote_count(count: number){
        this.ModLoader.emulator.rdramWrite8(0x800A54EB, count);
    }

    get fly_coins(): number{
        return this.ModLoader.emulator.rdramRead8(0x800A54DF);
    }

    set fly_coins(count: number){
        this.ModLoader.emulator.rdramWrite8(0x800A54DF, count);
    }

    get paw_coins(): number{
        return this.ModLoader.emulator.rdramRead8(0x800A54E3);
    }

    set paw_coins(count: number){
        this.ModLoader.emulator.rdramWrite8(0x800A54E3, count);
    }

    get bonus_coins(): number{
        return this.ModLoader.emulator.rdramRead8(0x800A54E7);
    }

    set bonus_coins(count: number){
        this.ModLoader.emulator.rdramWrite8(0x800A54E7, count);
    }

    get life_counter(): number{
        return this.ModLoader.emulator.rdramRead8(0x800A54D7);
    }

    set life_counter(count: number){
        this.ModLoader.emulator.rdramWrite8(0x800A54D7, count);
    }

    get health_counter(): number{
        return this.ModLoader.emulator.rdramRead8(0x800A54DB);
    }

    set health_counter(count: number){
        this.ModLoader.emulator.rdramWrite8(0x800A54DB, count);
    }
//Broadcast Stations will effect Stat screen and Level Menu, but not pause counters.
    get totally_scrooged(): number{
        return this.ModLoader.emulator.rdramRead8(0x800A54B0);
    }

    set totally_scrooged(count: number){
        this.ModLoader.emulator.rdramWrite8(0x800A54B0, count);
    }

    get totally_scrooged_bonus_coins(): number{
        return this.ModLoader.emulator.rdramRead8(0x800A5534);
    }

    set totally_scrooged_bonus_coins(count: number){
        this.ModLoader.emulator.rdramWrite8(0x800A5534, count);
    }

    get totally_scrooged_paw_coins(): number{
        return this.ModLoader.emulator.rdramRead16(0x800A5548);
    }

    set totally_scrooged_paw_coins(count: number){
        this.ModLoader.emulator.rdramWrite16(0x800A5548, count);
    }

    get clueless_in_seattle(): number{
        return this.ModLoader.emulator.rdramRead8(0x800A54B1);
    }

    set clueless_in_seattle(count: number){
        this.ModLoader.emulator.rdramWrite8(0x800A54B1, count);
    }

    get clueless_in_seattle_bonus_coins(): number{
        return this.ModLoader.emulator.rdramRead8(0x800A5536);
    }

    set clueless_in_seattle_bonus_coins(count: number){
        this.ModLoader.emulator.rdramWrite8(0x800A5536, count);
    }

    get clueless_in_seattle_paw_coins(): number{
        return this.ModLoader.emulator.rdramRead16(0x800A54FA);
    }

    set clueless_in_seattle_paw_coins(count: number){
        this.ModLoader.emulator.rdramWrite16(0x800A54FA, count);
    }

    get holy_moses(): number{
        return this.ModLoader.emulator.rdramRead8(0x800A54B2);
    }

    set holy_moses(count: number){
        this.ModLoader.emulator.rdramWrite8(0x800A54B2, count);
    }

    get holy_moses_bonus_coins(): number{
        return this.ModLoader.emulator.rdramRead8(0x800A5538);
    }

    set holy_moses_bonus_coins(count: number){
        this.ModLoader.emulator.rdramWrite8(0x800A5538, count);
    }

    get holy_moses_paw_coins(): number{
        return this.ModLoader.emulator.rdramRead16(0x800A54FC);
    }

    set holy_moses_paw_coins(count: number){
        this.ModLoader.emulator.rdramWrite16(0x800A54FC, count)
    }

    get war_is_heck(): number{
        return this.ModLoader.emulator.rdramRead8(0x800A54B3);
    }

    set war_is_heck(count: number){
        this.ModLoader.emulator.rdramWrite8(0x800A54B3, count);
    }

    get war_is_heck_bonus_coins(): number{
        return this.ModLoader.emulator.rdramRead8(0x800A553A);
    }

    set war_is_heck_bonus_coins(count: number){
        this.ModLoader.emulator.rdramWrite8(0x800A553A, count);
    }

    get war_is_heck_paw_coins(): number {
        return this.ModLoader.emulator.rdramRead16(0x800A54FE);
    }

    set war_is_heck_paw_coins(count: number){
        this.ModLoader.emulator.rdramWrite16(0x800A54FE, count);
    }

    get the_oregon_trail(): number{
        return this.ModLoader.emulator.rdramRead8(0x800A54B4);
    }

    set the_oregon_trail(count: number){
        this.ModLoader.emulator.rdramWrite8(0x800A54B4, count);
    }

    get the_oregon_trail_bonus_coins(): number{
        return this.ModLoader.emulator.rdramRead8(0x800A553C);
    }

    set the_oregon_trail_bonus_coins(count: number){
        this.ModLoader.emulator.rdramWrite8(0x800A553C, count);
    }

    get the_oregon_trail_paw_coins(): number{
        return this.ModLoader.emulator.rdramRead16(0x800A5500);
    }

    set the_oregon_trail_paw_coins(count: number){
        this.ModLoader.emulator.rdramWrite16(0x800A5500, count);
    }

    get cutcheese_island(): number{
        return this.ModLoader.emulator.rdramRead8(0x800A54B5);
    }

    set cutcheese_island(count: number){
        this.ModLoader.emulator.rdramWrite8(0x800A54B5, count);
    }

    get cutcheese_island_bonus_coins(): number{
        return this.ModLoader.emulator.rdramRead8(0x800A54B5);
    }

    set cutcheese_island_bonus_coins(count: number){
        this.ModLoader.emulator.rdramWrite8(0x800A54B5, count);
    }

    get cutcheese_island_paw_coins(): number{
        return this.ModLoader.emulator.rdramRead16(0x800A5502);
    }

    set cutcheese_island_paw_coins(count: number){
        this.ModLoader.emulator.rdramWrite16(0x800A5502, count);
    }

    get et_ty_gecko(): number{
        return this.ModLoader.emulator.rdramRead8(0x800A54B6);
    }

    set et_ty_gecko(count: number){
        this.ModLoader.emulator.rdramWrite8(0x800A54B6, count);
    }

    get et_ty_gecko_bonus_coins(): number{
        return this.ModLoader.emulator.rdramRead8(0x800A5540);
    }

    set et_ty_gecko_bonus_coins(count: number){
        this.ModLoader.emulator.rdramWrite8(0x800A5540, count);
    }

    get et_ty_gecko_paw_coins(): number{
        return this.ModLoader.emulator.rdramRead16(0x800A5504);
    }

    set et_ty_gecko_paw_coins(count: number){
        this.ModLoader.emulator.rdramWrite16(0x800A5504, count);
    }

    get beanStalker(): number{
        return this.ModLoader.emulator.rdramRead8(0x800A54B7);
    }

    set beanStalker(count: number){
        this.ModLoader.emulator.rdramWrite8(0x800A54B7, count);
    }

    get beanStalker_bonus_coins(): number{
        return this.ModLoader.emulator.rdramRead8(0x800A5542);
    }

    set beanStalker_bonus_coins(count: number){
        this.ModLoader.emulator.rdramWrite8(0x800A5542, count);
    }

    get beanStalker_paw_coins(): number{
        return this.ModLoader.emulator.rdramRead16(0x800A5506);
    }

    set beanStalker_paw_coins(count: number){
        this.ModLoader.emulator.rdramWrite16(0x800A5506, count);
    }

    get when_sushi_goes_bad(): number{
        return this.ModLoader.emulator.rdramRead8(0x800A54B8);
    }

    set when_sushi_goes_bad(count: number){
        this.ModLoader.emulator.rdramWrite8(0x800A54B8, count);
    }

    get when_sushi_goes_bad_bonus_coins(): number{
        return this.ModLoader.emulator.rdramRead8(0x800A5544);
    }

    set when_sushi_goes_bad_bonus_coins(count: number){
        this.ModLoader.emulator.rdramWrite8(0x800A5544, count);
    }

    get when_sushi_goes_bad_paw_coins(): number{
        return this.ModLoader.emulator.rdramRead16(0x800A5508);
    }

    set when_sushi_goes_bad_paw_coins(count: number){
        this.ModLoader.emulator.rdramWrite16(0x800A5508, count);
    }

    get my_three_goons(): number{
        return this.ModLoader.emulator.rdramRead8(0x800A54B9);
    }

    set my_three_goons(count: number){
        this.ModLoader.emulator.rdramWrite8(0x800A54B9, count);
    }

    get my_three_goons_bonus_coins(): number{
        return this.ModLoader.emulator.rdramRead8(0x800A5546);
    }

    set my_three_goons_bonus_coins(count: number){
        this.ModLoader.emulator.rdramWrite8(0x800A5546, count)
    }

    get my_three_goons_paw_coins(): number{
        return this.ModLoader.emulator.rdramRead16(0x800A550A);
    }

    set my_three_goons_paw_coins(count: number){
        this.ModLoader.emulator.rdramWrite16(0x800A550A, count);
    }

    get super_zeros(): number{
        return this.ModLoader.emulator.rdramRead8(0x800A54BA);
    }

    set super_zeros(count: number){
        this.ModLoader.emulator.rdramWrite8(0x800A54BA, count);
    }

    get super_zeros_bonus_coins(): number{
        return this.ModLoader.emulator.rdramRead8(0x800A5548);
    }

    set super_zeros_bonus_coins(count: number){
        this.ModLoader.emulator.rdramWrite8(0x800A5548, count);
    }

    get super_zeros_paw_coins(): number{
        return this.ModLoader.emulator.rdramRead16(0x800A550C);
    }

    set super_zeros_paw_coins(count: number){
        this.ModLoader.emulator.rdramWrite16(0x800A550C, count);
    }

    get fly_tv_remotes(): number{
        return this.ModLoader.emulator.rdramRead16(0x800A54F6)
    }

    set fly_tv_remotes(count: number){
        this.ModLoader.emulator.rdramWrite16(0x800A54F6, count);
    }
//Hub Worlds
    get mission_control(): number{
        return this.ModLoader.emulator.rdramRead8(0x800A569B);
    }

    set mission_control(count: number){
        this.ModLoader.emulator.rdramWrite8(0x800A569B, count);
    }

    get mission_control_tutorial(): number{
        return this.ModLoader.emulator.rdramRead8(0x800A569F);
    }

    set mission_control_tutorial(count: number){
        this.ModLoader.emulator.rdramWrite8(0x800A569F, count);
    }

    get mission_control_bonus_coins(): number{
        return this.ModLoader.emulator.rdramRead8(0x800A5563);
    }

    set mission_control_bonus_coins(count: number){
        this.ModLoader.emulator.rdramWrite8(0x800A5563, count);
    }

    get mission_control_paw_coins(): number{
        return this.ModLoader.emulator.rdramRead16(0x800A5526);
    }

    set mission_control_paw_coins(count: number){
        this.ModLoader.emulator.rdramWrite16(0x800A5526, count);
    }

    get lake_flaccid(): number{
        return this.ModLoader.emulator.rdramRead8(0x800A54C8);
    }

    set lake_flaccid(count: number){
        this.ModLoader.emulator.rdramWrite8(0x800A54C8, count);
    }

    get lake_flaccid_bonus_coins(): number{
        return this.ModLoader.emulator.rdramRead8(0x800A5565);
    }

    set lake_flaccid_bonus_coins(count: number){
        this.ModLoader.emulator.rdramWrite8(0x800A5565, count);
    }

    get lake_flaccid_paw_coins(): number{
        return this.ModLoader.emulator.rdramRead16(0x800A5528);
    }

    set lake_flaccid_paw_coins(count: number){
        this.ModLoader.emulator.rdramWrite16(0x800A5528, count);
    }

    get slappy_valley(): number{
        return this.ModLoader.emulator.rdramRead8(0x800A54C9);
    }

    set slappy_valley(count: number){
        this.ModLoader.emulator.rdramWrite8(0x800A54C9, count);
    }

    get slappy_valley_bonus_coins(): number{
        return this.ModLoader.emulator.rdramRead8(0x800A5567);
    }

    set slappy_valley_bonus_coins(count: number){
        this.ModLoader.emulator.rdramWrite8(0x800A5567, count);
    }

    get slappy_valley_paw_coins(): number{
        return this.ModLoader.emulator.rdramRead16(0x800A552A);
    }

    set slappy_valley_paw_coins(count: number){
        this.ModLoader.emulator.rdramWrite16(0x800A552A, count);
    }

    get funky_town(): number{
        return this.ModLoader.emulator.rdramRead8(0x800A54CA);
    }

    set funky_town(f: number){
        this.ModLoader.emulator.rdramWrite8(0x800A54CA, f);
    }

//Bonus Worlds that will give you the cheat codes
    get marsupial_madness(): number{
        return this.ModLoader.emulator.rdramRead8(0x800A5698);
    }

    set marsupial_madness(count: number){
        this.ModLoader.emulator.rdramWrite8(0x800A5698, count);
    }

    get gextreme_sports(): number{
        return this.ModLoader.emulator.rdramRead8(0x800A569F);
    }

    set gextreme_sports(count: number){
        this.ModLoader.emulator.rdramWrite8(0x800A569F, count);
    }

    get war_and_pieces(): number{
        return this.ModLoader.emulator.rdramRead8(0x800A569F);
    }

    set war_and_pieces(count: number){
        this.ModLoader.emulator.rdramWrite8(0x800A569F, count);
    }

    get true_gifts(): number{
        return this.ModLoader.emulator.rdramRead16(0x800A5698);
    }

    set true_gifts(count: number){
        this.ModLoader.emulator.rdramWrite16(0x800A5698, count);
    }

    get what_a_crock():number{
        return this.ModLoader.emulator.rdramRead16(0x800A5698);
    }

    set what_a_crock(count: number){
        this.ModLoader.emulator.rdramWrite16(0x800A5698, count);
    }
//Secret levels plus opening of the Vault
    get secret_levels(): number{
        return this.ModLoader.emulator.rdramRead8(0x800A569B);
    }

    set secret_levels(count: number){
        this.ModLoader.emulator.rdramWrite8(0x800A569B, count);
    }

}