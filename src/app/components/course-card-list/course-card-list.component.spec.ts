import { Component, DebugElement, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ICourse } from 'src/app/shared/models/course';

import { CourseCardListComponent } from './course-card-list.component';

const mockCourses: Array<ICourse> = [
  {
    actualPrice: 840,
    id: 1,
    author: 'Arthur Hansen',
    tags: ['accusantium', 'suscipit', 'adipisci'],
    details:
      'Incidunt enim veniam. Id fugit odit ipsam et iusto esse est dignissimos eum. Totam ut est nobis consequatur aut consequuntur. Et nesciunt tempore. Eius blanditiis et minima adipisci est dolorum itaque omnis quidem.\n \rInventore vel aperiam necessitatibus consequuntur tempora est est repudiandae quas. Quis natus eos accusantium eaque quaerat tempora suscipit sed. Deserunt voluptatem eius consequatur reiciendis quisquam iure. Totam aut odit eum incidunt suscipit.\n \rEum ut neque et molestiae vel repellat rerum distinctio tempora. Mollitia doloremque nisi nemo eum. Est voluptate aut perferendis consequatur et et. Natus qui voluptatem quia.',
    description: 'Tempore sed unde laboriosam qui consequatur rem.',
    title: 'doloribus sapiente facere sit laborum qui'
  },
  {
    actualPrice: 789,
    discountedPrice: 564,
    id: 2,
    author: 'Velma Mohr',
    tags: ['omnis', 'facere', 'nulla'],
    details:
      'Et impedit quis doloribus porro et hic. Qui laudantium dolorem repudiandae rerum. Expedita magni blanditiis et natus.\n \rMaiores ullam ut eos necessitatibus cum non. Delectus numquam et quia autem impedit voluptatem. Molestias numquam aspernatur. Exercitationem eum est ut.\n \rDignissimos doloremque iste inventore quam. Consectetur aliquam ea maxime cum harum aut. Quia deleniti unde architecto fugit suscipit ut. Necessitatibus dolorem ea. Consequatur ullam eum ut quam.',
    description:
      'Placeat ut impedit laborum dolorum beatae omnis voluptate adipisci eveniet.',
    title: 'impedit velit eaque vero ut quod'
  },
  {
    actualPrice: 838,
    id: 3,
    author: 'Christine Anderson',
    tags: ['earum', 'cupiditate', 'aperiam'],
    details:
      'Distinctio officia rerum est ut quis excepturi quo maxime. Ut ut quia. Et cumque nemo et vel nostrum.\n \rConsequatur labore iusto architecto libero ullam dignissimos corrupti ipsa. Laboriosam placeat et et hic. Eaque et deserunt repellendus nulla asperiores quas labore vero fugit. Nesciunt aut omnis. Eius quas distinctio sed magni consequatur nisi et debitis.\n \rAtque vitae non aperiam. Repudiandae sint itaque est et dicta autem facilis. Esse repudiandae placeat quo optio pariatur eius libero reprehenderit. Nam nihil ut perspiciatis autem vitae et eum voluptatibus repellendus. Et eius aliquam nostrum quia. Eaque enim est maiores animi et autem.',
    description:
      'Deserunt et porro animi doloribus et voluptas aliquid provident a.',
    title: 'alias laudantium id nostrum laborum'
  },
  {
    actualPrice: 735,
    discountedPrice: 592,
    id: 4,
    author: 'Doug Schiller',
    tags: ['quas'],
    details:
      'Nihil voluptatem asperiores modi eos quia qui minus ad ea. Mollitia quasi doloribus necessitatibus deleniti dolores qui. Sed aut maxime et minima aut. Illum aut eveniet deserunt voluptas nisi repudiandae maxime sint.\n \rFacere eligendi iusto in est porro et sed velit. Laudantium quis voluptatibus est vel illum unde odit. Aliquid ducimus enim minima dolores debitis omnis sequi.\n \rTotam expedita tempora. Commodi ex voluptatum doloremque. Sit voluptas porro.',
    description: 'Rerum maxime sint.',
    title: 'saepe quam est'
  },
  {
    actualPrice: 728,
    id: 5,
    author: 'Terry Lubowitz',
    tags: ['rem', 'consequatur', 'vero'],
    details:
      'Quaerat deleniti provident ipsam dolorem quisquam sint tempore. Atque magni aut tempore aperiam nesciunt rerum rerum non. Officiis accusamus nihil perspiciatis. Reprehenderit aliquid quam rerum cumque quia sunt.\n \rMolestias consectetur fuga perferendis facilis harum perferendis dolorem. Modi et eaque. Voluptatem repellat sint ut nam sapiente omnis voluptas eos. Alias hic et voluptatem aspernatur dolorem et provident. Quibusdam numquam libero placeat. Dolorem nostrum accusamus aspernatur odit temporibus porro qui in distinctio.\n \rIn ratione quam dolore. Exercitationem qui dolorum ut dolorem commodi sequi accusamus eum reiciendis. Natus maxime temporibus eum eos alias consequatur voluptas quia.',
    description: 'Omnis enim rerum cum nihil voluptas commodi sit libero quo.',
    title: 'at omnis nobis adipisci sint'
  },
  {
    actualPrice: 819,
    discountedPrice: 560,
    id: 6,
    author: 'Jacquelyn Vandervort',
    tags: ['voluptatem', 'ea', 'ut'],
    details:
      'Ab dignissimos quo consequatur autem culpa maxime amet quidem voluptatem. Necessitatibus ut molestiae quia. Accusantium quia provident numquam.\n \rAut esse facere aut velit expedita molestiae temporibus. Nesciunt reprehenderit corrupti nulla cumque molestiae. Vel nobis voluptas eaque aut perspiciatis est est sint magni. Ea debitis quod corrupti.\n \rTotam distinctio sed explicabo et provident tempora. Ea aut autem. Et laborum blanditiis sapiente quidem mollitia possimus et earum qui. Voluptate ut et error nemo libero quo.',
    description:
      'Facere sit consectetur sunt sunt rerum libero doloremque fuga.',
    title: 'voluptates similique mollitia veniam'
  },
  {
    actualPrice: 722,
    discountedPrice: 550,
    id: 7,
    author: 'Karla Dibbert',
    tags: ['alias', 'aut'],
    details:
      'Aliquam animi vitae ea rerum dolorem nulla laborum. Veritatis repudiandae expedita ducimus sunt. Et adipisci necessitatibus quibusdam. Sint qui enim aut modi id ad. Quia voluptas illum.\n \rVoluptas ratione dolor qui assumenda dignissimos quia beatae ad. Quae adipisci eos eveniet. Nisi voluptate quia ipsam qui ipsam est maiores sequi cum.\n \rMaxime eum et provident amet consequatur aut placeat. Sint deleniti qui. Beatae nesciunt dignissimos asperiores aperiam ut ducimus. Voluptatem quis ipsum eveniet dignissimos vero atque sit error. Ut sit facilis aut in quibusdam rerum reiciendis est.',
    description: 'Voluptas doloremque accusamus ipsum facere impedit sed.',
    title: 'nostrum quod provident quia'
  },
  {
    actualPrice: 712,
    discountedPrice: 648,
    id: 8,
    author: 'Dr. Ollie Kuhn',
    tags: ['aut', 'itaque'],
    details:
      'Vel alias tempore molestiae deleniti dolor non. Tempore qui dignissimos exercitationem qui deserunt illum ipsum possimus eligendi. Aut cumque qui qui aperiam fugit. Ut laboriosam maxime veritatis veniam velit. Blanditiis et sit labore ad quis maiores et qui adipisci.\n \rMaxime quibusdam itaque modi. Tenetur ipsa eligendi ut sunt. Voluptatum id sint cupiditate.\n \rDolor autem sit nisi. Et ea et quas. Omnis qui sunt. Est cum quasi quia minima.',
    description: 'Ipsam ut corporis omnis minima libero.',
    title: 'sequi magnam id culpa'
  },
  {
    actualPrice: 775,
    discountedPrice: 652,
    id: 9,
    author: 'Ana Schimmel',
    tags: ['voluptatum'],
    details:
      'A est sed repellat. Dicta ut expedita accusantium ipsum quis quo. Facere culpa animi quo iste. Impedit ut quam et. Culpa odit id. Eos nostrum qui molestias eos non harum.\n \rEst aut omnis. Quae maiores quidem similique dolorem nemo ut corporis. Dolor rem voluptas qui sed. Tenetur reiciendis qui ipsam modi. Ipsa quia et voluptatum quae maiores. Mollitia quis saepe consequuntur et cum consequatur.\n \rQuos optio ab dolor officiis. Rem exercitationem velit quam voluptatem sed aliquam in atque itaque. Ullam laudantium voluptas aliquid accusantium eos. Neque dolores nam non dolorem.',
    description: 'Delectus est aut eius magni officia dignissimos quasi.',
    title: 'veritatis occaecati sint eos'
  },
  {
    actualPrice: 704,
    discountedPrice: 589,
    id: 10,
    author: 'Chester Corkery',
    tags: ['dolorum', 'voluptatum'],
    details:
      'Quo error incidunt reiciendis fuga esse eos. Non consequatur aliquid ea a nemo tempora aperiam. Placeat sunt earum et ut adipisci explicabo. Tempora voluptatem amet mollitia qui sunt. Itaque autem quas nihil dignissimos et voluptatem. Et et porro perspiciatis et rerum dolor asperiores blanditiis.\n \rPerspiciatis dolorum accusamus nam perferendis molestiae est libero voluptatem consectetur. Hic repudiandae magni ea dolores totam. Voluptatem labore voluptates soluta molestias. Deleniti ea fuga veritatis non pariatur.\n \rMolestias dolores blanditiis reiciendis. Dolores voluptatem tenetur nemo dicta iure id enim. Tenetur et laboriosam facilis sint vel sunt dolore. Voluptas nulla porro ullam temporibus ut voluptatibus deleniti quod. Sed qui sed at sed. Sed eius dolore.',
    description: 'Voluptas voluptatibus excepturi corporis.',
    title: 'delectus et ea aut ipsum assumenda'
  }
];

@Component({
  template: ` <app-course-card-list
    #child
    [courses]="courses"
    [searchFilter]="searchTerm"
  >
  </app-course-card-list>`
})
class TestHostComponent {
  courses = [...mockCourses];
  searchTerm = '';
  @ViewChild('child') child!: CourseCardListComponent;
}

describe('CourseCardListComponent', () => {
  let hostComponent: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseCardListComponent, TestHostComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    hostComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(hostComponent).toBeTruthy();
  });

  it('should increment page number when next page button is clicked', () => {
    fixture.detectChanges();
    const nextPageButton = fixture.debugElement.query(
      By.css('[data-testid="next-page-button"]')
    );

    nextPageButton.triggerEventHandler('click', null);
    const currentPageIndex = hostComponent.child.currentPageIndex;

    expect(currentPageIndex).toBe(1);
  });

  it('should decrement page number when previous page button is clicked', () => {
    hostComponent.child.currentPageIndex = 1;
    fixture.detectChanges();
    const prevPageButton = fixture.debugElement.query(
      By.css('[data-testid="prev-page-button"]')
    );

    prevPageButton.triggerEventHandler('click', null);
    const currentPageIndex = hostComponent.child.currentPageIndex;

    expect(currentPageIndex).toBe(0);
  });

  it('should change page to the clicked page number', () => {
    fixture.detectChanges();
    const secondPageButton = fixture.debugElement.query(
      (debugEl) =>
        debugEl.name === 'button' &&
        debugEl.nativeElement.textContent.trim() === '2'
    );

    secondPageButton.triggerEventHandler('click', 1);
    const currentPageIndex = hostComponent.child.currentPageIndex;

    expect(currentPageIndex).toBe(1);
  });

  it('should filter the courses based on the search term', () => {
    hostComponent.searchTerm = 'Arthur Hansen';
    fixture.detectChanges();

    expect(hostComponent.child.paginatedCourses[0].length).toBe(1);
    expect(hostComponent.child.paginatedCourses[0][0]).toEqual({
      actualPrice: 840,
      id: 1,
      author: 'Arthur Hansen',
      tags: ['accusantium', 'suscipit', 'adipisci'],
      details:
        'Incidunt enim veniam. Id fugit odit ipsam et iusto esse est dignissimos eum. Totam ut est nobis consequatur aut consequuntur. Et nesciunt tempore. Eius blanditiis et minima adipisci est dolorum itaque omnis quidem.\n \rInventore vel aperiam necessitatibus consequuntur tempora est est repudiandae quas. Quis natus eos accusantium eaque quaerat tempora suscipit sed. Deserunt voluptatem eius consequatur reiciendis quisquam iure. Totam aut odit eum incidunt suscipit.\n \rEum ut neque et molestiae vel repellat rerum distinctio tempora. Mollitia doloremque nisi nemo eum. Est voluptate aut perferendis consequatur et et. Natus qui voluptatem quia.',
      description: 'Tempore sed unde laboriosam qui consequatur rem.',
      title: 'doloribus sapiente facere sit laborum qui'
    });
  });
});
