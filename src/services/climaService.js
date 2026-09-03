const GEOCODING_URL = 'https://nominatim.openstreetmap.org/search';
const FORECAST_URL = 'https://api.open-meteo.com/v1/forecast';

const CONDITIONS = {
  0: 'Céu limpo',
  1: 'Predominantemente limpo',
  2: 'Parcialmente nublado',
  3: 'Nublado',
  45: 'Neblina',
  48: 'Neblina com geada',
  51: 'Garoa leve',
  53: 'Garoa moderada',
  55: 'Garoa forte',
  61: 'Chuva leve',
  63: 'Chuva moderada',
  65: 'Chuva forte',
  71: 'Neve leve',
  73: 'Neve moderada',
  75: 'Neve forte',
  80: 'Pancadas de chuva',
  81: 'Pancadas moderadas',
  82: 'Pancadas fortes',
  95: 'Trovoada',
  96: 'Trovoada com granizo',
  99: 'Trovoada forte',
};

export async function buscarClima(cidade) {
  const parametrosCidade = new URLSearchParams({
    q: cidade,
    format: 'jsonv2',
    limit: '1',
    countrycodes: 'br',
    'accept-language': 'pt-BR',
  });
  const respostaCidade = await fetch(`${GEOCODING_URL}?${parametrosCidade.toString()}`, {
    headers: { Accept: 'application/json' },
  });

  if (!respostaCidade.ok) {
    throw new Error('Não foi possível localizar a cidade agora.');
  }

  const dadosCidade = await respostaCidade.json();
  const local = dadosCidade?.[0];

  if (!local) {
    throw new Error('Cidade não encontrada. Confira o nome e tente novamente.');
  }

  const parametrosClima = new URLSearchParams({
    latitude: String(local.lat),
    longitude: String(local.lon),
    current: 'temperature_2m,apparent_temperature,wind_speed_10m,weather_code',
    timezone: 'auto',
  });
  const respostaClima = await fetch(`${FORECAST_URL}?${parametrosClima.toString()}`);

  if (!respostaClima.ok) {
    throw new Error('Não foi possível consultar o clima agora.');
  }

  const dadosClima = await respostaClima.json();
  const atual = dadosClima.current;

  if (!atual) {
    throw new Error('A API não retornou os dados do clima.');
  }

  return {
    cidade: local.name || local.display_name.split(',')[0],
    regiao: local.address?.state || local.address?.municipality || local.display_name.split(',')[1]?.trim() || 'Brasil',
    temperatura: Math.round(atual.temperature_2m),
    sensacao: Math.round(atual.apparent_temperature),
    vento: Math.round(atual.wind_speed_10m),
    condicao: CONDITIONS[atual.weather_code] || 'Condição não informada',
  };
}
