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
      state.weekIsOpen = true;
    },
    closeWeekMenu: (state) => {
      state.weekIsOpen = false;
    },

    openBonusLessonMenu: (state) => {
      state.bonusLessonsIsOpen = true;
    },
    closeBonusLessonMenu: (state) => {
      state.bonusLessonsIsOpen = false;
    },
    openMobileMenu: (state) => {
      state.mobileMenuIsOpen = true;
    },
    closeMobileMenu: (state) => {
      state.mobileMenuIsOpen = false;
    },
    closeProjectMenu: (state) => {
      state.projectsMenuIsOpen = false;
    },
    openProjectMenu: (state) => {
      state.projectsMenuIsOpen = true;
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
  closeProjectMenu,
  openProjectMenu,
} = navigationMenuSlice.actions;

export const selectNavigationMenu = (state: RootState) =>
  state['navigation-menu'];

export default navigationMenuSlice.reducer;
