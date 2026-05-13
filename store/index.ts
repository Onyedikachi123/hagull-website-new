'use client'

import { create } from 'zustand'

// ─── UI Store ─────────────────────────────────────────────────────────────────
interface UIState {
  mobileMenuOpen: boolean
  activeContinent: string
  setMobileMenuOpen: (open: boolean) => void
  toggleMobileMenu: () => void
  setActiveContinent: (continent: string) => void
}

export const useUIStore = create<UIState>((set) => ({
  mobileMenuOpen: false,
  activeContinent: 'Africa',

  setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),
  toggleMobileMenu: () => set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen })),
  setActiveContinent: (continent) => set({ activeContinent: continent }),
}))

// ─── Vendor Store ─────────────────────────────────────────────────────────────
interface VendorState {
  selectedCurrencies: Record<string, string>
  setVendorCurrency: (vendorId: string, currency: string) => void
}

export const useVendorStore = create<VendorState>((set) => ({
  selectedCurrencies: {},

  setVendorCurrency: (vendorId, currency) =>
    set((state) => ({
      selectedCurrencies: {
        ...state.selectedCurrencies,
        [vendorId]: currency,
      },
    })),
}))
