export type Referency = {
  src: string;
  fontes: string;
  elaboracao: string;
}

export type Map = {
  map_id: string;
  map_desc: string;
  map_atr: string | null;
  map_ctg: string;
  map_refs: Referency;
  choropleth?: number;
}

export type SubCategory = {
  subctg_id: number;
  subctg_desc: string;
  sub_ctg_id: number;
  subctg_maps: Map[];
  sel: boolean;
  transform: string;
}

export type Category = {
  ctg_id: number;
  ctg_desc: string;
  ctg_subs: SubCategory[];
}

export type TLegend = {
  atr: string;
  color: string;
}
