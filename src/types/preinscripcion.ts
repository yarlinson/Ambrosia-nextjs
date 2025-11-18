export interface PreinscripcionData {
  nombreCompleto: string;
  email: string;
  telefono: string;
  condicionPaciente: string;
  nivelIddsi?: string;
  observaciones?: string;
  planSeleccionado?: string;
}

export interface PreinscripcionResponse {
  success: boolean;
  message: string;
  userId?: string;
}

