import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-third-step',
  templateUrl: './third-step.component.html',
  styleUrl: './third-step.component.scss'
})
export class ThirdStepComponent {
  @Output() clickevent = new EventEmitter<any>();
  moviesForm: FormGroup; 
  favoriteMovies: { title: string; year: number }[] = [];

  constructor(private fb: FormBuilder) {
    this.moviesForm = this.fb.group({
      movies: this.fb.array([this.createMovieGroup()]) 
    });
  }
nextFn(data: { order: number; value: string }){
    this.clickevent.emit(data);
  }
  get movies(): FormArray {
    return this.moviesForm.get('movies') as FormArray;
  }
  createMovieGroup(): FormGroup {
    return this.fb.group({
      title: ['', [Validators.required]],
      year: ['', [Validators.required]] // Year validation
    });
  }

  addMovie(): void {
    this.movies.push(this.createMovieGroup());
  }
  saveMovies(): void {
    if (this.moviesForm.valid) {
      this.favoriteMovies = this.moviesForm.value.movies;
      this.moviesForm.reset();
      this.movies.clear();
      this.addMovie(); 
    }
  }
 
 
}
