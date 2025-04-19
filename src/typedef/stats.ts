import type { MoveDamageClass, Move } from "./moves";
import type { Characteristic, Nature } from "./pokemon";
import type { APIResource, Name, NamedAPIResource } from "./utility";

export interface Stat {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** ID the games use for this stat. */
    game_index: number;
    /** Whether this stat only exists within a battle. */
    is_battle_only: boolean;
    /** A detail of moves which affect this stat positively or negatively. */
    affecting_moves: MoveStatAffectSets;
    /** A detail of natures which affect this stat positively or negatively. */
    affecting_natures: NatureStatAffectSets;
    /** (Characteristic[]) A list of characteristics that are set on a Pokémon when its highest base stat is this stat. */
    characteristics: APIResource<Characteristic>[];
    /** (MoveDamageClass) The class of damage this stat is directly related to. */
    move_damage_class: NamedAPIResource<MoveDamageClass>;
    /** The name of this resource listed in different languages. */
    names: Name[];
}

export interface MoveStatAffectSets {
    /** A list of moves and how they change the referenced stat. */
    increase: MoveStatAffect[];
    /** A list of moves and how they change the referenced stat. */
    decrease: MoveStatAffect[];
}

export interface MoveStatAffect {
    /** The maximum amount of change to the referenced stat. */
    change: number;
    /** (Move) The move causing the change. */
    move: NamedAPIResource<Move>;
}

export interface NatureStatAffectSets {
    /** (Nature[]) A list of natures and how they change the referenced stat. */
    increase: NamedAPIResource<Nature>[];
    /** (Nature[]) A list of nature sand how they change the referenced stat. */
    decrease: NamedAPIResource<Nature>[];
}
