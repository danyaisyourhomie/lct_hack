import { StateCreator } from 'zustand';
import { DEFAULT_MAP_PARAMETERS } from 'constants/map';
import { MOCKED_EVENTS } from 'mocked/events';
import { EventRecord } from 'types/event';
import { Incident, IncidentCount, MapAddress, MapObject, MapSettings } from 'types/map';

type State = {
  events: EventRecord[];
  addresses: MapAddress[];
  mapSettings: MapSettings;
  selectedPoint: MapObject | null;
  incidents: Incident[];
  incidentCount: IncidentCount[];
  heatboxVisible: boolean;
}

type Actions = {
  setEvents: (events: EventRecord[]) => void;
  setPoint: (point: MapObject | null) => void;
  setAddresses: (addresses: MapAddress[]) => void;
  setIncidents: (incidents: Incident[]) => void;
  setIncidentsCount: (incidents: IncidentCount[]) => void;
  toggleHeatBox: () => void;
}

export type MapSlice = State & Actions;

const initialState: State = {
  events: MOCKED_EVENTS,
  mapSettings: DEFAULT_MAP_PARAMETERS,
  selectedPoint: null,
  addresses: [],
  incidents: [],
  incidentCount: [],
  heatboxVisible: true
};

export const createMapSlice: StateCreator<MapSlice> = (set, state) => ({
  ...initialState,
  setEvents: (events) => {
    set({ events });
  },
  setPoint: (point) => {
    set({ selectedPoint: point });
  },
  setAddresses: (addresses) => {
    set({ addresses });
  },
  setIncidents: (incidents) => {
    set({ incidents });
  },
  setIncidentsCount: (count) => {
    set({ incidentCount: count });
  },
  toggleHeatBox: () => {
    set({ heatboxVisible: !state().heatboxVisible });
  }
});
