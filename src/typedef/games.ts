import type { Region } from "./locations";
import type { Move, MoveLearnMethod } from "./moves";
import type { Ability, PokemonSpecies } from "./pokemon";
import type { Type } from "./types";
import type { Description, Name, NamedAPIResource } from "./utility";

export interface Generation {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** (Ability[]) A list of abilities that were introduced in this generation. */
    abilities: NamedAPIResource<Ability>[];
    /** The name of this resource listed in different languages. */
    names: Name[];
    /** (Region) The main region travelled in this generation. */
    main_region: NamedAPIResource<Region>;
    /** (Move[]) A list of moves that were introduced in this generation. */
    moves: NamedAPIResource<Move>[];
    /** (PokemonSpecies[]) A list of Pokémon species that were introduced in this generation. */
    pokemon_species: NamedAPIResource<PokemonSpecies>[];
    /** (Type[]) A list of types that were introduced in this generation. */
    types: NamedAPIResource<Type>[];
    /** (VersionGroup[]) A list of version groups that were introduced in this generation. */
    version_groups: NamedAPIResource<VersionGroup>[];
}

export interface Pokedex {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** Whether or not this Pokédex originated in the main series of the video games. */
    is_main_series: boolean;
    /** The description of this resource listed in different languages. */
    descriptions: Description[];
    /** The name of this resource listed in different languages. */
    names: Name[];
    /** A list of Pokémon catalogued in this Pokédex and their indexes. */
    pokemon_entries: PokemonEntry[];
    /** (Region) The region this Pokédex catalogues Pokémon for. */
    region: NamedAPIResource<Region>;
    /** (VersionGroup[]) A list of version groups this Pokédex is relevant to. */
    version_groups: NamedAPIResource<VersionGroup>[];
}

export interface PokemonEntry {
    /** The index of this Pokémon species entry within the Pokédex. */
    entry_number: number;
    /** (PokemonSpecies) The Pokémon species being encountered. */
    pokemon_species: NamedAPIResource<PokemonSpecies>;
}

export interface Version {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: Name[];
    /** (VersionGroup) The version group this version belongs to. */
    version_group: NamedAPIResource<VersionGroup>;
}

export interface VersionGroup {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** Order for sorting. Almost by date of release, except similar versions are grouped together. */
    order: number;
    /** (Generation) The generation this version was introduced in. */
    generation: NamedAPIResource<Generation>;
    /** (MoveLearnMethod[]) A list of methods in which Pokémon can learn moves in this version group. */
    move_learn_methods: NamedAPIResource<MoveLearnMethod>[];
    /** (Pokedex[]) A list of Pokédexes introduces in this version group. */
    pokedexes: NamedAPIResource<Pokedex>[];
    /** (Region[]) A list of regions that can be visited in this version group. */
    regions: NamedAPIResource<Region>[];
    /** (Version[]) The versions this version group owns. */
    versions: NamedAPIResource<Version>[];
}
