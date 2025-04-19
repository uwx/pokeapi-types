import type { VersionGroup } from "./games";
import type { Item } from "./items";
import type { Move } from "./moves";
import type { NamedAPIResource } from "./utility";

export interface Machine {
    /** The identifier for this resource. */
    id: number;
    /** (Item) The TM or HM item that corresponds to this machine. */
    item: NamedAPIResource<Item>;
    /** (Move) The move that is taught by this machine. */
    move: NamedAPIResource<Move>;
    /** (VersionGroup) The version group that this machine applies to. */
    version_group: NamedAPIResource<VersionGroup>;
}
