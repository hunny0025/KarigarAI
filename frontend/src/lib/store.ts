import { create } from 'zustand';
import { Product } from './data';

interface CartItem {
  product: Product;
  quantity: number;
}

interface StoreState {
  // Cart
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;

  // Wishlist
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
}

export const useStore = create<StoreState>((set, get) => ({
  // Cart
  cart: [],
  addToCart: (product) =>
    set((state) => {
      const existing = state.cart.find((item) => item.product.id === product.id);
      if (existing) {
        return {
          cart: state.cart.map((item) =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { cart: [...state.cart, { product, quantity: 1 }] };
    }),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.product.id !== productId),
    })),
  updateQuantity: (productId, quantity) =>
    set((state) => ({
      cart: quantity <= 0
        ? state.cart.filter((item) => item.product.id !== productId)
        : state.cart.map((item) =>
            item.product.id === productId ? { ...item, quantity } : item
          ),
    })),
  clearCart: () => set({ cart: [] }),
  getCartTotal: () =>
    get().cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
  getCartCount: () =>
    get().cart.reduce((sum, item) => sum + item.quantity, 0),

  // Wishlist
  wishlist: [],
  addToWishlist: (product) =>
    set((state) => ({
      wishlist: state.wishlist.some((p) => p.id === product.id)
        ? state.wishlist
        : [...state.wishlist, product],
    })),
  removeFromWishlist: (productId) =>
    set((state) => ({
      wishlist: state.wishlist.filter((p) => p.id !== productId),
    })),
  isInWishlist: (productId) =>
    get().wishlist.some((p) => p.id === productId),
}));
