import type { Generation } from "./games";
import type { MoveDamageClass, Move } from "./moves";
import type { Pokemon } from "./pokemon";
import type { GenerationGameIndex, Name, NamedAPIResource } from "./utility";

export interface Type {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** A detail of how effective this type is toward others and vice versa. */
    damage_relations: TypeRelations;
    /** A list of game indices relevant to this item by generation. */
    game_indices: GenerationGameIndex[];
    /** (Generation) The generation this type was introduced in. */
    generation: NamedAPIResource<Generation>;
    /** (MoveDamageClass) The class of damage inflicted by this type. */
    move_damage_class: NamedAPIResource<MoveDamageClass>;
    /** The name of this resource listed in different languages. */
    names: Name[];
    /** A list of details of Pokémon that have this type. */
    pokemon: TypePokemon[];
    /** (Move[]) A list of moves that have this type. */
    moves: NamedAPIResource<Move>[];
}

export interface TypePokemon {
    /** The order the Pokémon's types are listed in. */
    slot: number;
    /** (Pokemon) The Pokémon that has the referenced type. */
    pokemon: NamedAPIResource<Pokemon>;
}

export interface TypeRelations {
    /** (Type[]) A list of types this type has no effect on. */
    no_damage_to: NamedAPIResource<Type>[];
    /** (Type[]) A list of types this type is not very effect against. */
    half_damage_to: NamedAPIResource<Type>[];
    /** (Type[]) A list of types this type is very effect against. */
    double_damage_to: NamedAPIResource<Type>[];
    /** (Type[]) A list of types that have no effect on this type. */
    no_damage_from: NamedAPIResource<Type>[];
    /** (Type[]) A list of types that are not very effective against this type. */
    half_damage_from: NamedAPIResource<Type>[];
    /** (Type[]) A list of types that are very effective against this type. */
    double_damage_from: NamedAPIResource<Type>[];
}
