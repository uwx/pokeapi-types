import type { EncounterConditionValue, EncounterMethod } from "./encounters";
import type { Version, Generation, VersionGroup } from "./games";
import type { Machine } from "./machines";

export interface NamedAPIResourceList<T> {
    /** The total number of resources available from this API. */
    count: number;
    /** The URL for the next page in the list. */
    next: string;
    /** The URL for the previous page in the list. */
    previous: string;
    /** A list of named API resources. */
    results: NamedAPIResource<T>[];
}

export interface Language {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** Whether or not the games are published in this language. */
    official: boolean;
    /** The two-letter code of the country where this language is spoken. Note that it is not unique. */
    ios639: string;
    /** The two-letter code of the language. Note that it is not unique. */
    iso3166: string;
    /** The name of this resource listed in different languages. */
    names: Name[];
}

//
// Common Models
//

export interface APIResource<T> {
    __key?: T;

    /** The URL of the referenced resource. */
    url: string;
}

export interface Description {
    /** The localized description for an API resource in a specific language. */
    description: string;
    /** (Language) The language this name is in. */
    language: NamedAPIResource<Language>;
}

export interface Effect {
    /** The localized effect text for an API resource in a specific language. */
    effect: string;
    /** (Language) The language this effect is in. */
    language: NamedAPIResource<Language>;
}

export interface Encounter {
    /** The lowest level the Pokémon could be encountered at. */
    min_level: number;
    /** The highest level the Pokémon could be encountered at. */
    max_level: number;
    /** (EncounterConditionValue[]) A list of condition values that must be in effect for this encounter to occur. */
    condition_values: NamedAPIResource<EncounterConditionValue>[];
    /** Percent chance that this encounter will occur. */
    chance: number;
    /** (EncounterMethod) The method by which this encounter happens. */
    method: NamedAPIResource<EncounterMethod>;
}

export interface FlavorText {
    /** The localized flavor text for an API resource in a specific language. */
    flavor_text: string;
    /** (Language) The language this name is in. */
    language: NamedAPIResource<Language>;
    /** (Version) The game version this flavor text is extracted from. */
    version: NamedAPIResource<Version>;
}

export interface GenerationGameIndex {
    /** The internal id of an API resource within game data. */
    game_index: number;
    /** (Generation) The generation relevant to this game index. */
    generation: NamedAPIResource<Generation>;
}

export interface MachineVersionDetail {
    /** (Machine) The machine that teaches a move from an item. */
    machine: APIResource<Machine>;
    /** (VersionGroup) The version group of this specific machine. */
    version_group: NamedAPIResource<VersionGroup>;
}

export interface Name {
    /** The localized name for an API resource in a specific language. */
    name: string;
    /** (Language) The language this name is in. */
    language: NamedAPIResource<Language>;
}

export interface NamedAPIResource<T> {
    __key?: T;

    /** The name of the referenced resource. */
    name: string;
    /** The URL of the referenced resource. */
    url: string;
}

export interface VerboseEffect {
    /** The localized effect text for an API resource in a specific language. */
    effect: string;
    /** The localized effect text in brief. */
    short_effect: string;
    /** (Language) The language this effect is in. */
    language: NamedAPIResource<Language>;
}

export interface VersionEncounterDetail {
    /** (Version) The game version this encounter happens in. */
    version: NamedAPIResource<Version>;
    /** The total percentage of all encounter potential. */
    max_chance: number;
    /** A list of encounters and their specifics. */
    encounter_details: Encounter[];
}

export interface VersionGameIndex {
    /** The internal id of an API resource within game data. */
    game_index: number;
    /** (Version) The version relevant to this game index. */
    version: NamedAPIResource<Version>;
}

export interface VersionGroupFlavorText {
    /** The localized name for an API resource in a specific language. */
    text: string;
    /** (Language) The language this name is in. */
    language: NamedAPIResource<Language>;
    /** (VersionGroup) The version group which uses this flavor text. */
    version_group: NamedAPIResource<VersionGroup>;
}
