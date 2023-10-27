// reducers/vaultReducer.ts
import { Vault } from "@prisma/client";
import { createSlice, PayloadAction,createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface VaultState {
  vaults: Vault[];
  currentVault: Vault | null;
  currentUserId: string | null;
  isLoading: boolean;
}


const initialState: VaultState = {
  vaults: [],
  currentVault: null,
  currentUserId: null,
  isLoading: false
};

const vaultSlice = createSlice({
  name: "vault",
  initialState:initialState,
  reducers: {
    setVaults: (state, action: PayloadAction<VaultState>) => {
      state.vaults = action.payload.vaults;
      state.currentUserId = action.payload.currentUserId;
      state.currentVault = action.payload.currentVault;
      state.isLoading = false;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const fetchVaultData = createAsyncThunk<VaultState, void>(
  "vault/fetchData",
  async (_, { getState, dispatch }) => {
    const state = getState() as RootState; // Use RootState to access other slices if needed

    if (!state.vault.vaults.length && !state.vault.isLoading) {
      dispatch(vaultSlice.actions.setLoading(true));

      try {
        // Simulate an API call (replace with your actual API call)
        const response = await fetch("/api/vaults/", {
          method: "GET",
        }).then((res) => res.json());
        dispatch(vaultSlice.actions.setVaults(response));
        return response;
      } catch (error) {
        // Handle errors as needed
        throw error;
      } finally {
        dispatch(vaultSlice.actions.setLoading(false));
      }
    }

    return {} as VaultState;
  }
);

export const { setVaults: setAll } = vaultSlice.actions;
export default  vaultSlice.reducer;
