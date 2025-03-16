import { makeAutoObservable } from 'mobx';

class SeminarStore {
  seminars = [];

  constructor() {
    makeAutoObservable(this);
  }

  // Загрузка семинаров
  setSeminars(seminars) {
    this.seminars = seminars;
  }

  // Добавление нового семинара
  addSeminar(seminar) {
    this.seminars.push(seminar);
  }

  // Удаление семинара по id
  deleteSeminar(id) {
    this.seminars = this.seminars.filter((seminar) => seminar.id !== id);
  }

  // Обновление семинара
  updateSeminar(updatedSeminar) {
    const index = this.seminars.findIndex(
      (seminar) => seminar.id === updatedSeminar.id
    );
    if (index !== -1) {
      this.seminars[index] = updatedSeminar;
    }
  }
}

const seminarStore = new SeminarStore();
export default seminarStore;
