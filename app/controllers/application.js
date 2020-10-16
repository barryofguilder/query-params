import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  queryParams = ['foo'];
  @tracked foo = 'baz';

  @action
  updateSort() {
    this.foo = this.foo === 'baz' ? 'bar' : 'baz';
  }
}
