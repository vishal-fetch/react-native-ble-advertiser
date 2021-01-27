/**
 * @providesModule BLEAdvertiser
 */

'use strict';

import { NativeModules } from 'react-native';
export default NativeModules.BLEAdvertiser;

export function fullUUID(uuid) {
  if (uuid.length === 4) return '0000' + uuid.toLowerCase() + '-0000-1000-8000-00805f9b34fb'
  if (uuid.length === 8) return uuid.toLowerCase() + '-0000-1000-8000-00805f9b34fb'
  return uuid.toLowerCase()
}
