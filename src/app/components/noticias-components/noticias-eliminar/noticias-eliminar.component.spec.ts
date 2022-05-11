import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoticiasEliminarComponent } from './noticias-eliminar.component';


describe('NoticiasEliminarComponent', () => {
  let component: NoticiasEliminarComponent;
  let fixture: ComponentFixture<NoticiasEliminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiasEliminarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiasEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
