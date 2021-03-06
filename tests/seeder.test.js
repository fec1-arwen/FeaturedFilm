const seed = require('../server/seeder');

test('the movie list has given movie', async () => {
  expect(seed.movies).toContain('Amelie');
});

test('the seeded list has 100 entires', async () => {
  seed.db.query(`USE featurefilm`);
  seed.db.query(`select title from Features`, (err, res) => {
    expect(res.length).toEqual(100);
    // done();
  });
});

test('the seeded db should contain titles from provided names', async () => {
  // seed.db.query(`USE featurefilm`);
  seed.db.query(`select title from Features`, (err, res) => {
    expect(seed.movies).toContain(res[2].title);

  });
});
