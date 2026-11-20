import { Anchor, BatteryCharging, Car, CircleDot, Wrench } from 'lucide-react';

const icons = {
  car: Car,
  wrench: Wrench,
  battery: BatteryCharging,
  tire: CircleDot,
  anchor: Anchor,
};

export const getServiceIcon = (key?: string) => icons[key as keyof typeof icons] ?? Wrench;
