import { Component, OnChanges} from 'angular2/core';

@Component({
    selector: 'ai-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})
export class StarComponent implements OnChanges {
    rating: number = 4;
    starWidth: number;
    
    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }
    
}