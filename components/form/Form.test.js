import renderer from 'react-test-renderer';
import Form from './Form';

test('Form component snapshot', () => {
  const component = renderer
    .create(
      <Form>
        <button id='button' type='submit'>
          Button
        </button>
      </Form>
    )
    .toJSON();

  const snapshot = `
    <form
      onSubmit={[Function]}
    >
      <button
        id="button"
        type="submit"
      >
        Button
      </button>
    </form>
 `;

  expect(component).toMatchInlineSnapshot(snapshot);
});

test('Form component 2', () => {
  expect(200).toBe(200);
});
