describe('validateFileFormat function:', function() {
  it('returns true for jpg files', function() {
    var testJpg = 'someJpg.jpg';
    expect(validateFileFormat(testJpg)).toBe(true);
  });

  it('returns true for png files', function() {
    var testPng = 'randomPng.png';
    expect(validateFileFormat(testPng)).toBe(true);
  });

  it('returns true for gif files', function() {
    var testGif = 'funnyGif.gif';
    expect(validateFileFormat(testGif)).toBe(true);
  });

  it('returns false for a non-supported file format', function() {
    var nonSupportedImage = 'sadBitmap.bmp';
    expect(validateFileFormat(nonSupportedImage)).toBeFalsy();
  });

  it('returns false for a file with no file extension', function() {
    var noFileExtension = 'fileWithNoExtension';
    expect(validateFileFormat(noFileExtension)).toBeFalsy();
  });
});
