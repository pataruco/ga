import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface NavigationMenu {
  bonusLessonsIsOpen: boolean;
  mobileMenuIsOpen: boolean;
  projectsMenuIsOpen: boolean;
  weekIsOpen: boolean;
}

const initialState: NavigationMenu = {
  bonusLessonsIsOpen: false,
  mobileMenuIsOpen: false,
  projectsMenuIsOpen: false,
  weekIsOpen: false,
};

export const navigationMenuSlice = createSlice({
  name: 'navigation-menu',
  initialState,
  reducers: {
    openWeekMenu: (state) => {
      return {
        ...state,
        weekIsOpen: true,
      };
    },
    closeWeekMenu: (state) => {
      return {
        ...state,
        weekIsOpen: false,
      };
    },

    openBonusLessonMenu: (state) => {
      return {
        ...state,
        bonusLessonsIsOpen: true,
      };
    },
    closeBonusLessonMenu: (state) => {
      return {
        ...state,
        bonusLessonsIsOpen: false,
      };
    },
    openMobileMenu: (state) => {
      return {
        ...state,
        mobileMenuIsOpen: true,
      };
    },
    closeMobileMenu: (state) => {
      return {
        ...state,
        mobileMenuIsOpen: false,
      };
    },
  },
});

export const {
  closeBonusLessonMenu,
  closeWeekMenu,
  openBonusLessonMenu,
  openWeekMenu,
  openMobileMenu,
  closeMobileMenu,
} = navigationMenuSlice.actions;

export const selectNavigationMenu = (state: RootState) =>
  state['navigation-menu'];

export default navigationMenuSlice.reducer;
