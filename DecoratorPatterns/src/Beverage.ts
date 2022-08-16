abstract class Beverage {
	description = '제목 없음';

	get beverageDescription() {
		return this.description;
	}

	abstract cost(): number;
}

export default Beverage;
