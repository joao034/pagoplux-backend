export interface TransactionResponse {
  code: number;
  description: string;
  detail: TransactionDetail;
  status: string;
}

export interface TransactionDetail {
  respuest: Respuest;
}

export interface Respuest {
  id_establecimiento: number;
  monto: string;
  fecha_transaccion: Date;
  descripcion: string;
  id_transaccion: string;
  valor_catalogo_estado: string;
  respuesta: null;
  voucher: string;
  adquiriente: string;
  valor_base0: string;
  valor_base12: string;
  valor_iva: string;
  numero_lote: string;
  propina: null;
  banco: string;
  emisor_tarjeta: string;
  numero_cuotas: number;
  proveedor_servicio_pago: string;
  tipo_credito: string;
  meses_gracia: number;
  interes: number;
  valor_interes: string;
  extras: null;
  marca: string;
  catalogos: Catalogos;
  cliente: Cliente;
  detalle: Detalle;
  items: any[];
  mid: string;
  tid: string;
  adquirente: string;
  informacionTarjeta: InformacionTarjeta;
  tipoPago: string;
}

export interface Catalogos {
  nombre_catalogo: string;
}

export interface Cliente {
  nombres: string;
  numero_identificacion: string;
}

export interface Detalle {
  numero_tarjeta: string;
}

export interface InformacionTarjeta {
  mesExpiracion: string;
  anioExpiracion: string;
}
