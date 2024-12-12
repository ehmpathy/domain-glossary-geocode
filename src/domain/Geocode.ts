import { DomainLiteral } from 'domain-objects';

/**
 * .what = a code which represents the geographic coordinates of a specific location.
 *
 * todo: support other shapes of geocodes. coordinate(lat/lon) is one type
 *
 * ref
 * - https://en.wikipedia.org/wiki/Geographic_coordinate_system
 */
export interface Geocode {
  /**
   * .what = a position north (+) or south (-) of the equator
   * .what.details
   *   - range = [-90,90]
   */
  latitude: number;

  /**
   * .what = a position east (+) or west (-) of the prime-meridian (Royal Observatory in Greenwich, England)
   * .what.details
   *   - range = [-180, 180]
   */
  longitude: number;
}
export class Geocode extends DomainLiteral<Geocode> implements Geocode {}
