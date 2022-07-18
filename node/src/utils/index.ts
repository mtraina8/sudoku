import { Separator } from 'inquirer'

export const SEPERATOR = '-------------------------------------\n'

export interface IHash {
  [key: string]: number[]
}

export const cartesian = (...a: any) => a.reduce((a: any, b: any) => a.flatMap((d: any) => b.map((e: any) => [d, e].flat())));

export const line = new Separator();

export const waitFor = async (seconds: number) => {
  await new Promise((res) => setTimeout(() => {
  res('');
}, seconds*1000));
};