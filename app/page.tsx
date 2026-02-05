'use client';

import { useState, useEffect } from 'react';

interface Ability {
  ability: {
    name: string;
  };
}

interface Stat {
  base_stat: number;
  stat: {
    name: string;
  };
}

interface Sprites {
  front_default: string;
  front_shiny: string;
}

interface EvolutionChain {
  species: {
    name: string;
  };
  evolves_to: EvolutionChain[];
}

interface Pokemon {
  id: number;
  name: string;
  sprites: Sprites;
  abilities: Ability[];
  stats: Stat[];
  species: {
    url: string;
  };
}

export default function Home() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [evolutions, setEvolutions] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPokemonList();
  }, []);

  const fetchPokemonList = async () => {
    try {
      const promises = [];
      for (let i = 1; i <= 30; i++) {
        promises.push(
          fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res => res.json())
        );
      }
      const results = await Promise.all(promises);
      setPokemonList(results);
      setSelectedPokemon(results[0]);
      fetchEvolutions(results[0]);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching Pokemon:', error);
      setLoading(false);
    }
  };

  const fetchEvolutions = async (pokemon: Pokemon) => {
    try {
      const speciesResponse = await fetch(pokemon.species.url);
      const speciesData = await speciesResponse.json();
      const evolutionResponse = await fetch(speciesData.evolution_chain.url);
      const evolutionData = await evolutionResponse.json();
      
      const evolutionNames = extractEvolutionNames(evolutionData.chain);
      setEvolutions(evolutionNames);
    } catch (error) {
      console.error('Error fetching evolutions:', error);
      setEvolutions([]);
    }
  };

  const extractEvolutionNames = (chain: EvolutionChain): string[] => {
    const names = [chain.species.name];
    if (chain.evolves_to.length > 0) {
      chain.evolves_to.forEach(evolution => {
        names.push(...extractEvolutionNames(evolution));
      });
    }
    return names;
  };

  const handlePokemonClick = (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon);
    fetchEvolutions(pokemon);
  };

  const capitalizeFirst = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-blue-900">
        <p className="text-3xl font-bold text-white">Cargando Pokémon...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-900">
      {/* Menú superior con scroll horizontal */}
      <div className="sticky top-0 z-50 bg-blue-950 border-b-4 border-yellow-400 shadow-lg">
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-yellow-500 scrollbar-track-blue-800">
          <div className="flex gap-4 p-4 min-w-max">
            {pokemonList.map((pokemon) => (
              <button
                key={pokemon.id}
                onClick={() => handlePokemonClick(pokemon)}
                className={`flex flex-col items-center p-3 rounded-lg transition-all duration-300 hover:scale-110 ${
                  selectedPokemon?.id === pokemon.id
                    ? 'bg-yellow-500 shadow-xl'
                    : 'bg-blue-700 hover:bg-blue-600'
                }`}
              >
                <img
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  className="w-16 h-16"
                />
                <span className={`text-sm font-semibold mt-1 ${
                  selectedPokemon?.id === pokemon.id ? 'text-blue-900' : 'text-white'
                }`}>
                  {capitalizeFirst(pokemon.name)}
                </span>
                <span className={`text-xs ${
                  selectedPokemon?.id === pokemon.id ? 'text-blue-700' : 'text-yellow-400'
                }`}>
                  #{pokemon.id.toString().padStart(3, '0')}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      {selectedPokemon && (
        <div className="container mx-auto px-4 py-6">
          {/* Header con nombre */}
          <div className="text-center mb-6">
            <h1 className="text-5xl font-bold text-white mb-2">
              {capitalizeFirst(selectedPokemon.name)}
            </h1>
            <p className="text-2xl text-yellow-400">
              #{selectedPokemon.id.toString().padStart(3, '0')}
            </p>
          </div>

          {/* Layout de 2 columnas */}
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            
            {/* Columna izquierda: Sprites y Habilidades */}
            <div className="space-y-6">
              {/* Sprites - Normal y Shiny */}
              <div className="bg-blue-800 rounded-xl p-6 shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-3">Normal</h3>
                    <div className="bg-white rounded-lg p-4">
                      <img
                        src={selectedPokemon.sprites.front_default}
                        alt={`${selectedPokemon.name} normal`}
                        className="w-32 h-32 mx-auto"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-yellow-400 mb-3">Shiny ✨</h3>
                    <div className="bg-white rounded-lg p-4">
                      <img
                        src={selectedPokemon.sprites.front_shiny}
                        alt={`${selectedPokemon.name} shiny`}
                        className="w-32 h-32 mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Habilidades */}
              <div className="bg-blue-800 rounded-xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  ⚡ Habilidades
                </h2>
                <div className="space-y-3">
                  {selectedPokemon.abilities.map((ability, index) => (
                    <div
                      key={index}
                      className="bg-blue-700 rounded-lg p-4 hover:bg-blue-600 transition-colors"
                    >
                      <p className="text-white font-semibold text-lg">
                        {capitalizeFirst(ability.ability.name.replace('-', ' '))}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Columna derecha: Stats y Evoluciones */}
            <div className="space-y-6">
              {/* Stats */}
              <div className="bg-blue-800 rounded-xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  📊 Estadísticas
                </h2>
                <div className="space-y-3">
                  {selectedPokemon.stats.map((stat, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-white font-semibold">
                          {capitalizeFirst(stat.stat.name.replace('-', ' '))}
                        </span>
                        <span className="text-yellow-400 font-bold">{stat.base_stat}</span>
                      </div>
                      <div className="w-full bg-blue-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${(stat.base_stat / 255) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Evoluciones */}
              <div className="bg-blue-800 rounded-xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  🔄 Cadena Evolutiva
                </h2>
                <div className="space-y-3">
                  {evolutions.length > 0 ? (
                    evolutions.map((evo, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="bg-blue-700 rounded-lg p-3 flex-1 hover:bg-blue-600 transition-colors">
                          <p className="text-white font-semibold">
                            {index + 1}. {capitalizeFirst(evo)}
                          </p>
                        </div>
                        {index < evolutions.length - 1 && (
                          <span className="text-yellow-400 text-2xl">→</span>
                        )}
                      </div>
                    ))
                  ) : (
                    <p className="text-white italic">No evoluciona</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}