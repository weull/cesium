/*global defineSuite*/
defineSuite([
             'Core/Matrix4',
             'Core/Matrix3',
             'Core/Cartesian3',
             'Core/Cartesian4',
             'Core/Math'
            ], function(
              Matrix4,
              Matrix3,
              Cartesian3,
              Cartesian4,
              CesiumMath) {
    "use strict";
    /*global jasmine,describe,xdescribe,it,xit,expect,beforeEach,afterEach,beforeAll,afterAll,spyOn,runs,waits,waitsFor*/

    it('default constructor creates values array with all zeros.', function() {
        var matrix = new Matrix4();
        expect(matrix[Matrix4.COLUMN0ROW0]).toEqual(0.0);
        expect(matrix[Matrix4.COLUMN1ROW0]).toEqual(0.0);
        expect(matrix[Matrix4.COLUMN2ROW0]).toEqual(0.0);
        expect(matrix[Matrix4.COLUMN3ROW0]).toEqual(0.0);
        expect(matrix[Matrix4.COLUMN0ROW1]).toEqual(0.0);
        expect(matrix[Matrix4.COLUMN1ROW1]).toEqual(0.0);
        expect(matrix[Matrix4.COLUMN2ROW1]).toEqual(0.0);
        expect(matrix[Matrix4.COLUMN3ROW1]).toEqual(0.0);
        expect(matrix[Matrix4.COLUMN0ROW2]).toEqual(0.0);
        expect(matrix[Matrix4.COLUMN1ROW2]).toEqual(0.0);
        expect(matrix[Matrix4.COLUMN2ROW2]).toEqual(0.0);
        expect(matrix[Matrix4.COLUMN3ROW2]).toEqual(0.0);
        expect(matrix[Matrix4.COLUMN0ROW3]).toEqual(0.0);
        expect(matrix[Matrix4.COLUMN1ROW3]).toEqual(0.0);
        expect(matrix[Matrix4.COLUMN2ROW3]).toEqual(0.0);
        expect(matrix[Matrix4.COLUMN3ROW3]).toEqual(0.0);
    });

    it('constructor sets properties from parameters.', function() {
        var matrix = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        expect(matrix[Matrix4.COLUMN0ROW0]).toEqual(1.0);
        expect(matrix[Matrix4.COLUMN1ROW0]).toEqual(2.0);
        expect(matrix[Matrix4.COLUMN2ROW0]).toEqual(3.0);
        expect(matrix[Matrix4.COLUMN3ROW0]).toEqual(4.0);
        expect(matrix[Matrix4.COLUMN0ROW1]).toEqual(5.0);
        expect(matrix[Matrix4.COLUMN1ROW1]).toEqual(6.0);
        expect(matrix[Matrix4.COLUMN2ROW1]).toEqual(7.0);
        expect(matrix[Matrix4.COLUMN3ROW1]).toEqual(8.0);
        expect(matrix[Matrix4.COLUMN0ROW2]).toEqual(9.0);
        expect(matrix[Matrix4.COLUMN1ROW2]).toEqual(10.0);
        expect(matrix[Matrix4.COLUMN2ROW2]).toEqual(11.0);
        expect(matrix[Matrix4.COLUMN3ROW2]).toEqual(12.0);
        expect(matrix[Matrix4.COLUMN0ROW3]).toEqual(13.0);
        expect(matrix[Matrix4.COLUMN1ROW3]).toEqual(14.0);
        expect(matrix[Matrix4.COLUMN2ROW3]).toEqual(15.0);
        expect(matrix[Matrix4.COLUMN3ROW3]).toEqual(16.0);
    });

    it('fromRowMajorArray works without a result parameter', function() {
        var expected = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        var matrix = Matrix4.fromRowMajorArray([1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0]);
        expect(matrix).toEqual(expected);
    });

    it('fromRowMajorArray works with a result parameter', function() {
        var expected = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        var result = new Matrix4();
        var matrix = Matrix4.fromRowMajorArray([1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0], result);
        expect(matrix).toBe(result);
        expect(matrix).toEqual(expected);
    });

    it('fromColumnMajorArray works without a result parameter', function() {
        var expected = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        var matrix = Matrix4.fromColumnMajorArray([1.0, 5.0, 9.0, 13.0, 2.0, 6.0, 10.0, 14.0, 3.0, 7.0, 11.0, 15.0, 4.0, 8.0, 12.0, 16.0]);
        expect(matrix).toEqual(expected);
    });

    it('fromColumnMajorArray works with a result parameter', function() {
        var expected = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        var result = new Matrix4();
        var matrix = Matrix4.fromColumnMajorArray([1.0, 5.0, 9.0, 13.0, 2.0, 6.0, 10.0, 14.0, 3.0, 7.0, 11.0, 15.0, 4.0, 8.0, 12.0, 16.0], result);
        expect(matrix).toBe(result);
        expect(matrix).toEqual(expected);
    });

    it('clone works without a result parameter', function() {
        var expected = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        var returnedResult = expected.clone();
        expect(returnedResult).toNotBe(expected);
        expect(returnedResult).toEqual(expected);
    });

    it('clone works with a result parameter', function() {
        var expected = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        var result = new Matrix4();
        var returnedResult = expected.clone(result);
        expect(returnedResult).toBe(result);
        expect(returnedResult).toNotBe(expected);
        expect(returnedResult).toEqual(expected);
    });

    it('fromRotationTranslation works without a result parameter', function() {
        var expected = new Matrix4(1.0, 2.0, 3.0, 10.0, 4.0, 5.0, 6.0, 11.0, 7.0, 8.0, 9.0, 12.0, 0.0, 0.0, 0.0, 1.0);
        var returnedResult = Matrix4.fromRotationTranslation(new Matrix3(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0), new Cartesian3(10.0, 11.0, 12.0));
        expect(returnedResult).toNotBe(expected);
        expect(returnedResult).toEqual(expected);
    });

    it('fromRotationTranslation works with a result parameter', function() {
        var expected = new Matrix4(1.0, 2.0, 3.0, 10.0, 4.0, 5.0, 6.0, 11.0, 7.0, 8.0, 9.0, 12.0, 0.0, 0.0, 0.0, 1.0);
        var result = new Matrix4();
        var returnedResult = Matrix4.fromRotationTranslation(new Matrix3(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0), new Cartesian3(10.0, 11.0, 12.0), result);
        expect(returnedResult).toBe(result);
        expect(returnedResult).toNotBe(expected);
        expect(returnedResult).toEqual(expected);
    });

    it('fromTranslation works without a result parameter', function() {
        var expected = new Matrix4(1.0, 0.0, 0.0, 10.0, 0.0, 1.0, 0.0, 11.0, 0.0, 0.0, 1.0, 12.0, 0.0, 0.0, 0.0, 1.0);
        var returnedResult = Matrix4.fromTranslation(new Cartesian3(10.0, 11.0, 12.0));
        expect(returnedResult).toNotBe(expected);
        expect(returnedResult).toEqual(expected);
    });

    it('fromTranslation works with a result parameter', function() {
        var expected = new Matrix4(1.0, 0.0, 0.0, 10.0, 0.0, 1.0, 0.0, 11.0, 0.0, 0.0, 1.0, 12.0, 0.0, 0.0, 0.0, 1.0);
        var result = new Matrix4();
        var returnedResult = Matrix4.fromTranslation(new Cartesian3(10.0, 11.0, 12.0), result);
        expect(returnedResult).toBe(result);
        expect(returnedResult).toNotBe(expected);
        expect(returnedResult).toEqual(expected);
    });

    it('fromScale works without a result parameter', function() {
        var expected = new Matrix4(
                7.0, 0.0, 0.0, 0.0,
                0.0, 8.0, 0.0, 0.0,
                0.0, 0.0, 9.0, 0.0,
                0.0, 0.0, 0.0, 1.0);
        var returnedResult = Matrix4.fromScale(new Cartesian3(7.0, 8.0, 9.0));
        expect(returnedResult).toNotBe(expected);
        expect(returnedResult).toEqual(expected);
    });

    it('fromScale works with a result parameter', function() {
        var expected = new Matrix4(
                7.0, 0.0, 0.0, 0.0,
                0.0, 8.0, 0.0, 0.0,
                0.0, 0.0, 9.0, 0.0,
                0.0, 0.0, 0.0, 1.0);
        var result = new Matrix4();
        var returnedResult = Matrix4.fromScale(new Cartesian3(7.0, 8.0, 9.0), result);
        expect(returnedResult).toBe(result);
        expect(returnedResult).toNotBe(expected);
        expect(returnedResult).toEqual(expected);
    });

    it('fromUniformScale works without a result parameter', function() {
        var expected = new Matrix4(
                2.0, 0.0, 0.0, 0.0,
                0.0, 2.0, 0.0, 0.0,
                0.0, 0.0, 2.0, 0.0,
                0.0, 0.0, 0.0, 1.0);
        var returnedResult = Matrix4.fromUniformScale(2.0);
        expect(returnedResult).toEqual(expected);
    });

    it('fromUniformScale works with a result parameter', function() {
        var expected = new Matrix4(
                2.0, 0.0, 0.0, 0.0,
                0.0, 2.0, 0.0, 0.0,
                0.0, 0.0, 2.0, 0.0,
                0.0, 0.0, 0.0, 1.0);
        var result = new Matrix4();
        var returnedResult = Matrix4.fromUniformScale(2.0, result);
        expect(returnedResult).toBe(result);
        expect(returnedResult).toEqual(expected);
    });

    it('createPerspectiveFieldOfView works without a result parameter', function() {
        var expected = new Matrix4(1, 0,                  0,                  0,
                                   0, 1,                  0,                  0,
                                   0, 0, -1.222222222222222, -2.222222222222222,
                                   0, 0,                  -1,                 0);
        var returnedResult = Matrix4.computePerspectiveFieldOfView(CesiumMath.PI_OVER_TWO, 1, 1, 10);
        expect(returnedResult).toEqualEpsilon(expected, CesiumMath.EPSILON15);
    });


    it('createPerspectiveFieldOfView works with a result parameter', function() {
        var expected = new Matrix4(1, 0,                   0,                  0,
                                   0, 1,                  0,                  0,
                                   0, 0, -1.222222222222222, -2.222222222222222,
                                   0, 0,                  -1,                 0);
        var result = new Matrix4();
        var returnedResult = Matrix4.computePerspectiveFieldOfView(CesiumMath.PI_OVER_TWO, 1, 1, 10, result);
        expect(returnedResult).toEqualEpsilon(expected, CesiumMath.EPSILON15);
    });

    it('fromCamera works without a result parameter', function() {
        var expected = Matrix4.IDENTITY;
        var returnedResult = Matrix4.fromCamera({
            eye : Cartesian3.ZERO,
            target : Cartesian3.negate(Cartesian3.UNIT_Z),
            up : Cartesian3.UNIT_Y
        });
        expect(expected).toEqual(returnedResult);
    });

    it('fromCamera works with a result parameter', function() {
        var expected = Matrix4.IDENTITY;
        var result = new Matrix4();
        var returnedResult = Matrix4.fromCamera({
            eye : Cartesian3.ZERO,
            target : Cartesian3.negate(Cartesian3.UNIT_Z),
            up : Cartesian3.UNIT_Y
        }, result);
        expect(returnedResult).toBe(result);
        expect(returnedResult).toEqual(expected);
    });

    it('createOrthographicOffCenter works without a result parameter', function() {
        var expected = new Matrix4(2, 0, 0, -1, 0, 2, 0, -5, 0, 0, -2, -1, 0, 0, 0, 1);
        var returnedResult = Matrix4.computeOrthographicOffCenter(0, 1, 2, 3, 0, 1);
        expect(returnedResult).toEqual(expected);
    });

    it('createOrthographicOffCenter works with a result parameter', function() {
        var expected = new Matrix4(2, 0, 0, -1, 0, 2, 0, -5, 0, 0, -2, -1, 0, 0, 0, 1);
        var result = new Matrix4();
        var returnedResult = Matrix4.computeOrthographicOffCenter(0, 1, 2, 3, 0, 1, result);
        expect(returnedResult).toBe(result);
        expect(returnedResult).toEqual(expected);
    });

    it('createViewportTransformation works without a result parameter', function() {
        var expected = new Matrix4(2.0, 0.0, 0.0, 2.0,
                                   0.0, 3.0, 0.0, 3.0,
                                   0.0, 0.0, 1.0, 1.0,
                                   0.0, 0.0, 0.0, 1.0);
        var returnedResult = Matrix4.computeViewportTransformation({
            x : 0,
            y : 0,
            width : 4.0,
            height : 6.0
        }, 0.0, 2.0);
        expect(returnedResult).toEqual(expected);
    });

    it('createViewportTransformation works with a result parameter', function() {
        var expected = new Matrix4(2.0, 0.0, 0.0, 2.0,
                                   0.0, 3.0, 0.0, 3.0,
                                   0.0, 0.0, 1.0, 1.0,
                                   0.0, 0.0, 0.0, 1.0);
        var result = new Matrix4();
        var returnedResult = Matrix4.computeViewportTransformation({
            x : 0,
            y : 0,
            width : 4.0,
            height : 6.0
        }, 0.0, 2.0, result);
        expect(returnedResult).toEqual(expected);
        expect(returnedResult).toBe(result);
    });

    it('createPerspectiveOffCenter works without a result parameter', function() {
        var expected = new Matrix4(2, 0, 3, 0, 0, 2, 5, 0, 0, 0, -3, -4, 0, 0, -1, 0);
        var returnedResult = Matrix4.computePerspectiveOffCenter(1, 2, 2, 3, 1, 2);
        expect(returnedResult).toEqual(expected);
    });

    it('createPerspectiveOffCenter works with a result parameter', function() {
        var expected = new Matrix4(2, 0, 3, 0, 0, 2, 5, 0, 0, 0, -3, -4, 0, 0, -1, 0);
        var result = new Matrix4();
        var returnedResult = Matrix4.computePerspectiveOffCenter(1, 2, 2, 3, 1, 2, result);
        expect(returnedResult).toEqual(expected);
        expect(returnedResult).toBe(result);
    });

    it('createInfinitePerspectiveOffCenter works without a result parameter', function() {
        var expected = new Matrix4(2, 0, 3, 0, 0, 2, 5, 0, 0, 0, -1, -2, 0, 0, -1, 0);
        var returnedResult = Matrix4.computeInfinitePerspectiveOffCenter(1, 2, 2, 3, 1);
        expect(returnedResult).toEqual(expected);
    });

    it('createInfinitePerspectiveOffCenter works with a result parameter', function() {
        var expected = new Matrix4(2, 0, 3, 0, 0, 2, 5, 0, 0, 0, -1, -2, 0, 0, -1, 0);
        var result = new Matrix4();
        var returnedResult = Matrix4.computeInfinitePerspectiveOffCenter(1, 2, 2, 3, 1, result);
        expect(returnedResult).toEqual(expected);
    });

    it('toArray works without a result parameter', function() {
        var expected = [1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0];
        var returnedResult = Matrix4.fromColumnMajorArray(expected).toArray();
        expect(returnedResult).toNotBe(expected);
        expect(returnedResult).toEqual(expected);
    });

    it('toArray works with a result parameter', function() {
        var expected = [1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0];
        var result = [];
        var returnedResult = Matrix4.fromColumnMajorArray(expected).toArray(result);
        expect(returnedResult).toBe(result);
        expect(returnedResult).toNotBe(expected);
        expect(returnedResult).toEqual(expected);
    });

    it('getElementIndex works', function() {
        var i = 0;
        for ( var col = 0; col < 4; col++) {
            for ( var row = 0; row < 4; row++) {
                var index = Matrix4.getElementIndex(col, row);
                expect(index).toEqual(i);
                i++;
            }
        }
    });

    it('getColumn works without a result parameter', function() {
        var matrix = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        var expectedColumn0 = new Cartesian4(1.0, 5.0, 9.0, 13.0);
        var expectedColumn1 = new Cartesian4(2.0, 6.0, 10.0, 14.0);
        var expectedColumn2 = new Cartesian4(3.0, 7.0, 11.0, 15.0);
        var expectedColumn3 = new Cartesian4(4.0, 8.0, 12.0, 16.0);

        var resultColumn0 = matrix.getColumn(0);
        var resultColumn1 = matrix.getColumn(1);
        var resultColumn2 = matrix.getColumn(2);
        var resultColumn3 = matrix.getColumn(3);

        expect(resultColumn0).toEqual(expectedColumn0);
        expect(resultColumn1).toEqual(expectedColumn1);
        expect(resultColumn2).toEqual(expectedColumn2);
        expect(resultColumn3).toEqual(expectedColumn3);
    });

    it('getColumn works with a result parameter', function() {
        var matrix = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        var expectedColumn0 = new Cartesian4(1.0, 5.0, 9.0, 13.0);
        var expectedColumn1 = new Cartesian4(2.0, 6.0, 10.0, 14.0);
        var expectedColumn2 = new Cartesian4(3.0, 7.0, 11.0, 15.0);
        var expectedColumn3 = new Cartesian4(4.0, 8.0, 12.0, 16.0);

        var resultColumn0 = new Cartesian4();
        var resultColumn1 = new Cartesian4();
        var resultColumn2 = new Cartesian4();
        var resultColumn3 = new Cartesian4();
        var returnedResultColumn0 = matrix.getColumn(0, resultColumn0);
        var returnedResultColumn1 = matrix.getColumn(1, resultColumn1);
        var returnedResultColumn2 = matrix.getColumn(2, resultColumn2);
        var returnedResultColumn3 = matrix.getColumn(3, resultColumn3);

        expect(resultColumn0).toBe(returnedResultColumn0);
        expect(resultColumn0).toEqual(expectedColumn0);
        expect(resultColumn1).toBe(returnedResultColumn1);
        expect(resultColumn1).toEqual(expectedColumn1);
        expect(resultColumn2).toBe(returnedResultColumn2);
        expect(resultColumn2).toEqual(expectedColumn2);
        expect(resultColumn3).toBe(returnedResultColumn3);
        expect(resultColumn3).toEqual(expectedColumn3);
    });

    it('setColumn works without a result parameter for each column', function() {
        var matrix = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);

        var expected = new Matrix4(17.0, 2.0, 3.0, 4.0, 18.0, 6.0, 7.0, 8.0, 19.0, 10.0, 11.0, 12.0, 20.0, 14.0, 15.0, 16.0);
        var result = matrix.setColumn(0, new Cartesian4(17.0, 18.0, 19.0, 20.0));
        expect(result).toEqual(expected);

        expected = new Matrix4(1.0, 17.0, 3.0, 4.0, 5.0, 18.0, 7.0, 8.0, 9.0, 19.0, 11.0, 12.0, 13.0, 20.0, 15.0, 16.0);
        result = matrix.setColumn(1, new Cartesian4(17.0, 18.0, 19.0, 20.0));
        expect(result).toEqual(expected);

        expected = new Matrix4(1.0, 2.0, 17.0, 4.0, 5.0, 6.0, 18.0, 8.0, 9.0, 10.0, 19.0, 12.0, 13.0, 14.0, 20.0, 16.0);
        result = matrix.setColumn(2, new Cartesian4(17.0, 18.0, 19.0, 20.0));
        expect(result).toEqual(expected);

        expected = new Matrix4(1.0, 2.0, 3.0, 17.0, 5.0, 6.0, 7.0, 18.0, 9.0, 10.0, 11.0, 19.0, 13.0, 14.0, 15.0, 20.0);
        result = matrix.setColumn(3, new Cartesian4(17.0, 18.0, 19.0, 20.0));
        expect(result).toEqual(expected);
    });

    it('setColumn works with a result parameter for each column', function() {
        var matrix = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);

        var result = new Matrix4();

        var expected = new Matrix4(17.0, 2.0, 3.0, 4.0, 18.0, 6.0, 7.0, 8.0, 19.0, 10.0, 11.0, 12.0, 20.0, 14.0, 15.0, 16.0);
        var returnedResult = matrix.setColumn(0, new Cartesian4(17.0, 18.0, 19.0, 20.0), result);
        expect(result).toBe(returnedResult);
        expect(result).toEqual(expected);

        expected = new Matrix4(1.0, 17.0, 3.0, 4.0, 5.0, 18.0, 7.0, 8.0, 9.0, 19.0, 11.0, 12.0, 13.0, 20.0, 15.0, 16.0);
        returnedResult = matrix.setColumn(1, new Cartesian4(17.0, 18.0, 19.0, 20.0), result);
        expect(result).toBe(returnedResult);
        expect(result).toEqual(expected);

        expected = new Matrix4(1.0, 2.0, 17.0, 4.0, 5.0, 6.0, 18.0, 8.0, 9.0, 10.0, 19.0, 12.0, 13.0, 14.0, 20.0, 16.0);
        returnedResult = matrix.setColumn(2, new Cartesian4(17.0, 18.0, 19.0, 20.0), result);
        expect(result).toBe(returnedResult);
        expect(result).toEqual(expected);

        expected = new Matrix4(1.0, 2.0, 3.0, 17.0, 5.0, 6.0, 7.0, 18.0, 9.0, 10.0, 11.0, 19.0, 13.0, 14.0, 15.0, 20.0);
        returnedResult = matrix.setColumn(3, new Cartesian4(17.0, 18.0, 19.0, 20.0), result);
        expect(result).toBe(returnedResult);
        expect(result).toEqual(expected);
});

    it('getRow works without a result parameter', function() {
        var matrix = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        var expectedRow0 = new Cartesian4(1.0, 2.0, 3.0, 4.0);
        var expectedRow1 = new Cartesian4(5.0, 6.0, 7.0, 8.0);
        var expectedRow2 = new Cartesian4(9.0, 10.0, 11.0, 12.0);
        var expectedRow3 = new Cartesian4(13.0, 14.0, 15.0, 16.0);

        var resultRow0 = matrix.getRow(0);
        var resultRow1 = matrix.getRow(1);
        var resultRow2 = matrix.getRow(2);
        var resultRow3 = matrix.getRow(3);

        expect(resultRow0).toEqual(expectedRow0);
        expect(resultRow1).toEqual(expectedRow1);
        expect(resultRow2).toEqual(expectedRow2);
        expect(resultRow3).toEqual(expectedRow3);
    });

    it('getRow works with a result parameter', function() {
        var matrix = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        var expectedRow0 = new Cartesian4(1.0, 2.0, 3.0, 4.0);
        var expectedRow1 = new Cartesian4(5.0, 6.0, 7.0, 8.0);
        var expectedRow2 = new Cartesian4(9.0, 10.0, 11.0, 12.0);
        var expectedRow3 = new Cartesian4(13.0, 14.0, 15.0, 16.0);

        var resultRow0 = new Cartesian4();
        var resultRow1 = new Cartesian4();
        var resultRow2 = new Cartesian4();
        var resultRow3 = new Cartesian4();
        var returnedResultRow0 = matrix.getRow(0, resultRow0);
        var returnedResultRow1 = matrix.getRow(1, resultRow1);
        var returnedResultRow2 = matrix.getRow(2, resultRow2);
        var returnedResultRow3 = matrix.getRow(3, resultRow3);

        expect(resultRow0).toBe(returnedResultRow0);
        expect(resultRow0).toEqual(expectedRow0);
        expect(resultRow1).toBe(returnedResultRow1);
        expect(resultRow1).toEqual(expectedRow1);
        expect(resultRow2).toBe(returnedResultRow2);
        expect(resultRow2).toEqual(expectedRow2);
        expect(resultRow3).toBe(returnedResultRow3);
        expect(resultRow3).toEqual(expectedRow3);
    });

    it('setRow works without a result parameter for each row', function() {
        var matrix = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);

        var expected = new Matrix4(91.0, 92.0, 93.0, 94.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        var result = matrix.setRow(0, new Cartesian4(91.0, 92.0, 93.0, 94.0));
        expect(result).toEqual(expected);

        expected = new Matrix4(1.0, 2.0, 3.0, 4.0, 95.0, 96.0, 97.0, 98.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        result = matrix.setRow(1, new Cartesian4(95.0, 96.0, 97.0, 98.0));
        expect(result).toEqual(expected);

        expected = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 99.0, 910.0, 911.0, 912.0, 13.0, 14.0, 15.0, 16.0);
        result = matrix.setRow(2, new Cartesian4(99.0, 910.0, 911.0, 912.0));
        expect(result).toEqual(expected);

        expected = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 913.0, 914.0, 915.0, 916.0);
        result = matrix.setRow(3, new Cartesian4(913.0, 914.0, 915.0, 916.0));
        expect(result).toEqual(expected);
    });

    it('setRow works with a result parameter for each row', function() {
        var matrix = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        var result = new Matrix4();

        var expected = new Matrix4(91.0, 92.0, 93.0, 94.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        var returnedResult = matrix.setRow(0, new Cartesian4(91.0, 92.0, 93.0, 94.0), result);
        expect(result).toBe(returnedResult);
        expect(result).toEqual(expected);

        expected = new Matrix4(1.0, 2.0, 3.0, 4.0, 95.0, 96.0, 97.0, 98.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        returnedResult = matrix.setRow(1, new Cartesian4(95.0, 96.0, 97.0, 98.0), result);
        expect(result).toBe(returnedResult);
        expect(result).toEqual(expected);

        expected = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 99.0, 910.0, 911.0, 912.0, 13.0, 14.0, 15.0, 16.0);
        returnedResult = matrix.setRow(2, new Cartesian4(99.0, 910.0, 911.0, 912.0), result);
        expect(result).toBe(returnedResult);
        expect(result).toEqual(expected);

        expected = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 913.0, 914.0, 915.0, 916.0);
        returnedResult = matrix.setRow(3, new Cartesian4(913.0, 914.0, 915.0, 916.0), result);
        expect(result).toBe(returnedResult);
        expect(result).toEqual(expected);
    });

    it('multiply works without a result parameter', function() {
        var left = new Matrix4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
        var right = new Matrix4(17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32);
        var expected = new Matrix4(250, 260, 270, 280, 618, 644, 670, 696, 986, 1028, 1070, 1112, 1354, 1412, 1470, 1528);
        var result = left.multiply(right);
        expect(result).toEqual(expected);
    });

    it('multiply works with a result parameter', function() {
        var left = new Matrix4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
        var right = new Matrix4(17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32);
        var expected = new Matrix4(250, 260, 270, 280, 618, 644, 670, 696, 986, 1028, 1070, 1112, 1354, 1412, 1470, 1528);
        var result = new Matrix4();
        var returnedResult = left.multiply(right, result);
        expect(returnedResult).toBe(result);
        expect(result).toEqual(expected);
    });

    it('multiply works with "this" result parameter', function() {
        var left = new Matrix4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
        var right = new Matrix4(17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32);
        var expected = new Matrix4(250, 260, 270, 280, 618, 644, 670, 696, 986, 1028, 1070, 1112, 1354, 1412, 1470, 1528);
        var returnedResult = left.multiply(right, left);
        expect(returnedResult).toBe(left);
        expect(left).toEqual(expected);
    });

    it('multiplyByTranslation works without a result parameter', function() {
        var m = new Matrix4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 0, 0, 0, 1);
        var translation = new Cartesian3(17, 18, 19);
        var expected = Matrix4.multiply(m, Matrix4.fromTranslation(translation));
        var result = m.multiplyByTranslation(translation);
        expect(result).toEqual(expected);
    });

    it('multiplyByTranslation works with a result parameter', function() {
        var m = new Matrix4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 0, 0, 0, 1);
        var translation = new Cartesian3(17, 18, 19);
        var expected = Matrix4.multiply(m, Matrix4.fromTranslation(translation));
        var result = new Matrix4();
        var returnedResult = m.multiplyByTranslation(translation, result);
        expect(returnedResult).toBe(result);
        expect(result).toEqual(expected);
    });

    it('multiplyByTranslation works with "this" result parameter', function() {
        var m = new Matrix4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 0, 0, 0, 1);
        var translation = new Cartesian3(17, 18, 19);
        var expected = Matrix4.multiply(m, Matrix4.fromTranslation(translation));
        var returnedResult = m.multiplyByTranslation(translation, m);
        expect(returnedResult).toBe(m);
        expect(m).toEqual(expected);
    });

    it('multiplyByUniformScale works without a result parameter', function() {
        var m = new Matrix4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 0, 0, 0, 1);
        var scale = 2.0;
        var expected = Matrix4.multiply(m, Matrix4.fromUniformScale(scale));
        var result = m.multiplyByUniformScale(scale);
        expect(result).toEqual(expected);
    });

    it('multiplyByUniformScale works with a result parameter', function() {
        var m = new Matrix4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 0, 0, 0, 1);
        var scale = 1.0;
        var expected = Matrix4.multiply(m, Matrix4.fromUniformScale(scale));
        var result = new Matrix4();
        var returnedResult = m.multiplyByUniformScale(scale, result);
        expect(returnedResult).toBe(result);
        expect(result).toEqual(expected);
    });

    it('multiplyByUniformScale works with "this" result parameter', function() {
        var m = new Matrix4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 0, 0, 0, 1);
        var scale = 2.0;
        var expected = Matrix4.multiply(m, Matrix4.fromUniformScale(scale));
        var returnedResult = m.multiplyByUniformScale(scale, m);
        expect(returnedResult).toBe(m);
        expect(m).toEqual(expected);
    });

    it('multiplyByVector works without a result parameter', function() {
        var left = new Matrix4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
        var right = new Cartesian4(17, 18, 19, 20);
        var expected = new Cartesian4(190, 486, 782, 1078);
        var result = left.multiplyByVector(right);
        expect(result).toEqual(expected);
    });

    it('multiplyByVector works with a result parameter', function() {
        var left = new Matrix4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
        var right = new Cartesian4(17, 18, 19, 20);
        var expected = new Cartesian4(190, 486, 782, 1078);
        var result = new Cartesian4();
        var returnedResult = left.multiplyByVector(right, result);
        expect(returnedResult).toBe(result);
        expect(result).toEqual(expected);
    });

    it('multiplyByPoint works without a result parameter', function() {
        var left = new Matrix4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
        var right = new Cartesian4(17, 18, 19);
        var expected = new Cartesian4(114, 334, 554, 774);
        var result = left.multiplyByPoint(right);
        expect(result).toEqual(expected);
    });

    it('multiplyByPoint works with a result parameter', function() {
        var left = new Matrix4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
        var right = new Cartesian4(17, 18, 19);
        var expected = new Cartesian4(114, 334, 554, 774);
        var result = new Cartesian4();
        var returnedResult = left.multiplyByPoint(right, result);
        expect(returnedResult).toBe(result);
        expect(result).toEqual(expected);
    });

    it('multiplyByScalar works without a result parameter', function() {
        var left = new Matrix4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
        var right = 2;
        var expected = new Matrix4(2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32);
        var result = left.multiplyByScalar(right);
        expect(result).toEqual(expected);
    });

    it('multiplyByScalar works with a result parameter', function() {
        var left = new Matrix4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
        var right = 2;
        var expected = new Matrix4(2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32);
        var result = new Matrix4();
        var returnedResult = left.multiplyByScalar(right, result);
        expect(returnedResult).toBe(result);
        expect(result).toEqual(expected);
    });

    it('negate works without a result parameter', function() {
        var matrix = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        var expected = new Matrix4(-1.0, -2.0, -3.0, -4.0, -5.0, -6.0, -7.0, -8.0, -9.0, -10.0, -11.0, -12.0, -13.0, -14.0, -15.0, -16.0);
        var result = matrix.negate();
        expect(result).toEqual(expected);
    });

    it('negate works with a result parameter', function() {
        var matrix = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        var expected = new Matrix4(-1.0, -2.0, -3.0, -4.0, -5.0, -6.0, -7.0, -8.0, -9.0, -10.0, -11.0, -12.0, -13.0, -14.0, -15.0, -16.0);
        var result = new Matrix4();
        var returnedResult = matrix.negate(result);
        expect(result).toBe(returnedResult);
        expect(result).toEqual(expected);
    });

    it('negate works with "this" result parameter', function() {
        var matrix = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        var expected = new Matrix4(-1.0, -2.0, -3.0, -4.0, -5.0, -6.0, -7.0, -8.0, -9.0, -10.0, -11.0, -12.0, -13.0, -14.0, -15.0, -16.0);
        var returnedResult = matrix.negate(matrix);
        expect(matrix).toBe(returnedResult);
        expect(matrix).toEqual(expected);
    });

    it('transpose works without a result parameter', function() {
        var matrix = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        var expected = new Matrix4(1.0, 5.0, 9.0, 13.0, 2.0, 6.0, 10.0, 14.0, 3.0, 7.0, 11.0, 15.0, 4.0, 8.0, 12.0, 16.0);
        var result = matrix.transpose();
        expect(result).toEqual(expected);
    });

    it('transpose works with a result parameter', function() {
        var matrix = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        var expected = new Matrix4(1.0, 5.0, 9.0, 13.0, 2.0, 6.0, 10.0, 14.0, 3.0, 7.0, 11.0, 15.0, 4.0, 8.0, 12.0, 16.0);
        var result = new Matrix4();
        var returnedResult = matrix.transpose(result);
        expect(result).toBe(returnedResult);
        expect(result).toEqual(expected);
    });

    it('transpose works with "this" result parameter', function() {
        var matrix = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        var expected = new Matrix4(1.0, 5.0, 9.0, 13.0, 2.0, 6.0, 10.0, 14.0, 3.0, 7.0, 11.0, 15.0, 4.0, 8.0, 12.0, 16.0);
        var returnedResult = matrix.transpose(matrix);
        expect(matrix).toBe(returnedResult);
        expect(matrix).toEqual(expected);
    });

    it('equals works in all cases', function() {
        var left = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        var right = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        expect(left.equals(right)).toEqual(true);

        left = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        right = new Matrix4(5.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0);
        expect(left.equals(right)).toEqual(false);

        left = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        right = new Matrix4(1.0, 6.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0);
        expect(left.equals(right)).toEqual(false);

        left = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        right = new Matrix4(1.0, 2.0, 7.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0);
        expect(left.equals(right)).toEqual(false);

        left = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        right = new Matrix4(1.0, 2.0, 3.0, 8.0, 5.0, 6.0, 7.0, 8.0, 9.0);
        expect(left.equals(right)).toEqual(false);

        left = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        right = new Matrix4(1.0, 2.0, 3.0, 4.0, 9.0, 6.0, 7.0, 8.0, 9.0);
        expect(left.equals(right)).toEqual(false);

        left = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        right = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 10.0, 7.0, 8.0, 9.0);
        expect(left.equals(right)).toEqual(false);

        left = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        right = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 11.0, 8.0, 9.0);
        expect(left.equals(right)).toEqual(false);

        left = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        right = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 12.0, 9.0);
        expect(left.equals(right)).toEqual(false);

        left = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        right = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 13.0);
        expect(left.equals(right)).toEqual(false);
    });

    it('equals works with undefined', function() {
        expect(Matrix4.equals(undefined, undefined)).toEqual(true);
        expect(Matrix4.equals(new Matrix4(), undefined)).toEqual(false);
        expect(Matrix4.equals(undefined, new Matrix4())).toEqual(false);
    });

    it('equalsEpsilon works in all cases', function() {
        var left = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        var right = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        expect(left.equalsEpsilon(right, 1.0)).toEqual(true);

        left = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        right = new Matrix4(5.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        expect(left.equalsEpsilon(right, 3.9)).toEqual(false);
        expect(left.equalsEpsilon(right, 4.0)).toEqual(true);

        left = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        right = new Matrix4(1.0, 6.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        expect(left.equalsEpsilon(right, 3.9)).toEqual(false);
        expect(left.equalsEpsilon(right, 4.0)).toEqual(true);

        left = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        right = new Matrix4(1.0, 2.0, 7.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        expect(left.equalsEpsilon(right, 3.9)).toEqual(false);
        expect(left.equalsEpsilon(right, 4.0)).toEqual(true);

        left = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        right = new Matrix4(1.0, 2.0, 3.0, 8.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        expect(left.equalsEpsilon(right, 3.9)).toEqual(false);
        expect(left.equalsEpsilon(right, 4.0)).toEqual(true);

        left = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        right = new Matrix4(1.0, 2.0, 3.0, 4.0, 9.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        expect(left.equalsEpsilon(right, 3.9)).toEqual(false);
        expect(left.equalsEpsilon(right, 4.0)).toEqual(true);

        left = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        right = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 10.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        expect(left.equalsEpsilon(right, 3.9)).toEqual(false);
        expect(left.equalsEpsilon(right, 4.0)).toEqual(true);

        left = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        right = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 11.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        expect(left.equalsEpsilon(right, 3.9)).toEqual(false);
        expect(left.equalsEpsilon(right, 4.0)).toEqual(true);

        left = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        right = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 12.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        expect(left.equalsEpsilon(right, 3.9)).toEqual(false);
        expect(left.equalsEpsilon(right, 4.0)).toEqual(true);

        left = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        right = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 13.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        expect(left.equalsEpsilon(right, 3.9)).toEqual(false);
        expect(left.equalsEpsilon(right, 4.0)).toEqual(true);

        left = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        right = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 14.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        expect(left.equalsEpsilon(right, 3.9)).toEqual(false);
        expect(left.equalsEpsilon(right, 4.0)).toEqual(true);

        left = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        right = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 15.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        expect(left.equalsEpsilon(right, 3.9)).toEqual(false);
        expect(left.equalsEpsilon(right, 4.0)).toEqual(true);

        left = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        right = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 16.0, 13.0, 14.0, 15.0, 16.0);
        expect(left.equalsEpsilon(right, 3.9)).toEqual(false);
        expect(left.equalsEpsilon(right, 4.0)).toEqual(true);

        left = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        right = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 17.0, 14.0, 15.0, 16.0);
        expect(left.equalsEpsilon(right, 3.9)).toEqual(false);
        expect(left.equalsEpsilon(right, 4.0)).toEqual(true);

        left = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        right = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 18.0, 15.0, 16.0);
        expect(left.equalsEpsilon(right, 3.9)).toEqual(false);
        expect(left.equalsEpsilon(right, 4.0)).toEqual(true);

        left = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        right = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 19.0, 16.0);
        expect(left.equalsEpsilon(right, 3.9)).toEqual(false);
        expect(left.equalsEpsilon(right, 4.0)).toEqual(true);


        left = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
        right = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 20.0);
        expect(left.equalsEpsilon(right, 3.9)).toEqual(false);
        expect(left.equalsEpsilon(right, 4.0)).toEqual(true);
    });

    it('equalsEpsilon works with undefined', function() {
        expect(Matrix4.equalsEpsilon(undefined, undefined, 1.0)).toEqual(true);
        expect(Matrix4.equalsEpsilon(new Matrix4(), undefined, 1.0)).toEqual(false);
        expect(Matrix4.equalsEpsilon(undefined, new Matrix4(), 1.0)).toEqual(false);
    });

    it('toString', function() {
        var matrix = new Matrix4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
        expect(matrix.toString()).toEqual('(1, 2, 3, 4)\n(5, 6, 7, 8)\n(9, 10, 11, 12)\n(13, 14, 15, 16)');
    });

    it('getTranslation works without a result parameter', function() {
        var matrix = new Matrix4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
        var expected = new Cartesian3(4, 8, 12);
        var returnedResult = matrix.getTranslation();
        expect(expected).toEqual(returnedResult);
    });

    it('getTranslation works with a result parameter', function() {
        var matrix = new Matrix4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
        var expected = new Cartesian3(4, 8, 12);
        var result = new Cartesian3();
        var returnedResult = matrix.getTranslation(result);
        expect(returnedResult).toBe(result);
        expect(expected).toEqual(returnedResult);
    });

    it('getRotation works without a result parameter', function() {
        var matrix = new Matrix4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
        var expected = new Matrix3(1, 2, 3, 5, 6, 7, 9, 10, 11);
        var returnedResult = matrix.getRotation();
        expect(expected).toEqual(returnedResult);
    });

    it('getRotation works with a result parameter', function() {
        var matrix = new Matrix4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
        var expected = new Matrix3(1, 2, 3, 5, 6, 7, 9, 10, 11);
        var result = new Matrix3();
        var returnedResult = matrix.getRotation(result);
        expect(returnedResult).toBe(result);
        expect(expected).toEqual(returnedResult);
    });

    it('inverse works without a result parameter', function() {
        var matrix = new Matrix4(0.72,  0.70, 0.00,  0.00,
                                -0.40,  0.41, 0.82,  0.00,
                                 0.57, -0.59, 0.57, -3.86,
                                 0.00,  0.00, 0.00,  1.00);

        var expected = new Matrix4(0.7150830193944467,    -0.3976559229803265,  0.5720664155155574,  2.2081763638900513,
                                   0.6930574657657118,    0.40901752077976433, -0.5884111702445733, -2.271267117144053,
                                   0.0022922521876059163, 0.8210249357172755,   0.5732623731786561,  2.2127927604696125,
                                   0.0,                   0.0,                  0.0,                 1.0);

        var returnedResult = matrix.inverse();
        expect(expected).toEqualEpsilon(returnedResult, CesiumMath.EPSILON20);
        expect(returnedResult.multiply(matrix)).toEqualEpsilon(Matrix4.IDENTITY, CesiumMath.EPSILON15);
    });

    it('inverse works with a result parameter', function() {
        var matrix = new Matrix4(0.72,  0.70, 0.00,  0.00,
                                -0.40,  0.41, 0.82,  0.00,
                                 0.57, -0.59, 0.57, -3.86,
                                 0.00,  0.00, 0.00,  1.00);

        var expected = new Matrix4(0.7150830193944467,    -0.3976559229803265,  0.5720664155155574,  2.2081763638900513,
                                   0.6930574657657118,    0.40901752077976433, -0.5884111702445733, -2.271267117144053,
                                   0.0022922521876059163, 0.8210249357172755,   0.5732623731786561,  2.2127927604696125,
                                   0.0,                   0.0,                  0.0,                 1.0);

        var result = new Matrix4();
        var returnedResult = matrix.inverse(result);
        expect(returnedResult).toBe(result);
        expect(expected).toEqualEpsilon(returnedResult, CesiumMath.EPSILON20);
        expect(returnedResult.multiply(matrix)).toEqualEpsilon(Matrix4.IDENTITY, CesiumMath.EPSILON15);
    });


    it('inverseTransformation works without a result parameter', function() {
        var matrix = new Matrix4(1, 0, 0, 10,
                                 0, 0, 1, 20,
                                 0, 1, 0, 30,
                                 0, 0, 0,  1);

        var expected = new Matrix4(1, 0, 0, -10,
                                   0, 0, 1, -30,
                                   0, 1, 0, -20,
                                   0, 0, 0, 1);

        var returnedResult = matrix.inverseTransformation();
        expect(expected).toEqual(returnedResult);
        expect(returnedResult.multiply(matrix)).toEqual(Matrix4.IDENTITY);
    });

    it('inverseTransformation works with a result parameter', function() {
        var matrix = new Matrix4(1, 0, 0, 10,
                                 0, 0, 1, 20,
                                 0, 1, 0, 30,
                                 0, 0, 0,  1);

        var expected = new Matrix4(1, 0, 0, -10,
                                   0, 0, 1, -30,
                                   0, 1, 0, -20,
                                   0, 0, 0, 1);

        var result = new Matrix4();
        var returnedResult = matrix.inverseTransformation(result);
        expect(returnedResult).toBe(result);
        expect(expected).toEqual(returnedResult);
        expect(returnedResult.multiply(matrix)).toEqual(Matrix4.IDENTITY);
    });

    it('fromRowMajorArray throws with undefined parameter', function() {
        expect(function() {
            Matrix4.fromRowMajorArray(undefined);
        }).toThrow();
    });

    it('fromColumnMajorArray throws with undefined parameter', function() {
        expect(function() {
            Matrix4.fromColumnMajorArray(undefined);
        }).toThrow();
    });

    it('fromRotationTranslation throws without rotation parameter', function() {
        expect(function() {
            Matrix4.fromRotationTranslation(undefined, new Cartesian3());
        }).toThrow();
    });

    it('fromRotationTranslation throws without translation parameter', function() {
        expect(function() {
            Matrix4.fromRotationTranslation(new Matrix4(), undefined);
        }).toThrow();
    });

    it('fromTranslation throws without translation parameter', function() {
        expect(function() {
            Matrix4.fromTranslation(undefined);
        }).toThrow();
    });

    it('fromScale throws without scale parameter', function() {
        expect(function() {
            Matrix4.fromScale(undefined);
        }).toThrow();
    });

    it('fromUniformScale throws without scale parameter', function() {
        expect(function() {
            Matrix4.fromUniformScale(undefined);
        }).toThrow();
    });

    it('fromCamera throws without camera', function() {
        expect(function() {
            Matrix4.fromCamera(undefined);
        }).toThrow();
    });

    it('fromCamera throws without eye', function() {
        expect(function() {
            Matrix4.fromCamera({
                target : Cartesian3.negate(Cartesian3.UNIT_Z),
                up : Cartesian3.UNIT_Y
            });
        }).toThrow();
    });

    it('fromCamera throws without target', function() {
        expect(function() {
            Matrix4.fromCamera({
                eye : Cartesian3.ZERO,
                up : Cartesian3.UNIT_Y
            });
        }).toThrow();
    });

    it('fromCamera throws without up', function() {
        expect(function() {
            Matrix4.fromCamera({
                eye : Cartesian3.ZERO,
                target : Cartesian3.negate(Cartesian3.UNIT_Z)
            });
        }).toThrow();
    });

    it('createOrthographicOffCenter throws without left', function() {
        expect(function() {
            var right = 0, bottom = 0, top = 0, near = 0, far = 0;
            Matrix4.computeOrthographicOffCenter(undefined, right, bottom, top, near, far);
        }).toThrow();
    });

    it('createOrthographicOffCenter throws without right', function() {
        expect(function() {
            var left = 0, bottom = 0, top = 0, near = 0, far = 0;
            Matrix4.computeOrthographicOffCenter(left, undefined, bottom, top, near, far);
        }).toThrow();
    });

    it('createOrthographicOffCenter throws without bottom', function() {
        expect(function() {
            var left = 0, right = 0, top = 0, near = 0, far = 0;
            Matrix4.computeOrthographicOffCenter(left, right, undefined, top, near, far);
        }).toThrow();
    });

    it('createOrthographicOffCenter throws without top', function() {
        expect(function() {
            var left = 0, right = 0, bottom = 0, near = 0, far = 0;
            Matrix4.computeOrthographicOffCenter(left, right, bottom, undefined, near, far);
        }).toThrow();
    });

    it('createOrthographicOffCenter throws without near', function() {
        expect(function() {
            var left = 0, right = 0, bottom = 0, top = 0, far = 0;
            Matrix4.computeOrthographicOffCenter(left, right, bottom, top, undefined, far);
        }).toThrow();
    });

    it('createOrthographicOffCenter throws without far', function() {
        expect(function() {
            var left = 0, right = 0, bottom = 0, top = 0, near = 0;
            Matrix4.computeOrthographicOffCenter(left, right, bottom, top, near, undefined);
        }).toThrow();
    });

    it('createPerspectiveOffCenter throws without left', function() {
        expect(function() {
            var right = 0, bottom = 0, top = 0, near = 0, far = 0;
            Matrix4.computePerspectiveOffCenter (undefined, right, bottom, top, near, far);
        }).toThrow();
    });

    it('createPerspectiveOffCenter throws without right', function() {
        expect(function() {
            var left = 0, bottom = 0, top = 0, near = 0, far = 0;
            Matrix4.computePerspectiveOffCenter (left, undefined, bottom, top, near, far);
        }).toThrow();
    });

    it('createPerspectiveOffCenter throws without bottom', function() {
        expect(function() {
            var left = 0, right = 0, top = 0, near = 0, far = 0;
            Matrix4.computePerspectiveOffCenter (left, right, undefined, top, near, far);
        }).toThrow();
    });

    it('createPerspectiveOffCenter throws without top', function() {
        expect(function() {
            var left = 0, right = 0, bottom = 0, near = 0, far = 0;
            Matrix4.computePerspectiveOffCenter (left, right, bottom, undefined, near, far);
        }).toThrow();
    });

    it('createPerspectiveOffCenter throws without near', function() {
        expect(function() {
            var left = 0, right = 0, bottom = 0, top = 0, far = 0;
            Matrix4.computePerspectiveOffCenter (left, right, bottom, top, undefined, far);
        }).toThrow();
    });

    it('createPerspectiveOffCenter throws without far', function() {
        expect(function() {
            var left = 0, right = 0, bottom = 0, top = 0, near = 0;
            Matrix4.computePerspectiveOffCenter (left, right, bottom, top, near, undefined);
        }).toThrow();
    });

    it('createInfinitePerspectiveOffCenter throws without left', function() {
        expect(function() {
            var right = 0, bottom = 0, top = 0, near = 0, far = 0;
            Matrix4.computeInfinitePerspectiveOffCenter (undefined, right, bottom, top, near, far);
        }).toThrow();
    });

    it('createInfinitePerspectiveOffCenter throws without right', function() {
        expect(function() {
            var left = 0, bottom = 0, top = 0, near = 0, far = 0;
            Matrix4.computeInfinitePerspectiveOffCenter (left, undefined, bottom, top, near, far);
        }).toThrow();
    });

    it('createInfinitePerspectiveOffCenter throws without bottom', function() {
        expect(function() {
            var left = 0, right = 0, top = 0, near = 0, far = 0;
            Matrix4.computeInfinitePerspectiveOffCenter (left, right, undefined, top, near, far);
        }).toThrow();
    });

    it('createInfinitePerspectiveOffCenter throws without top', function() {
        expect(function() {
            var left = 0, right = 0, bottom = 0, near = 0, far = 0;
            Matrix4.computeInfinitePerspectiveOffCenter (left, right, bottom, undefined, near, far);
        }).toThrow();
    });

    it('createInfinitePerspectiveOffCenter throws without near', function() {
        expect(function() {
            var left = 0, right = 0, bottom = 0, top = 0, far = 0;
            Matrix4.computeInfinitePerspectiveOffCenter (left, right, bottom, top, undefined, far);
        }).toThrow();
    });
    it('createPerspectiveFieldOfView throws with out of range y field of view', function() {
        expect(function() {
            Matrix4.computePerspectiveFieldOfView(0, 1, 2, 3);
        }).toThrow();
    });

    it('createPerspectiveFieldOfView throws with out of range aspect', function() {
        expect(function() {
            Matrix4.computePerspectiveFieldOfView(1, 0, 2, 3);
        }).toThrow();
    });

    it('createPerspectiveFieldOfView throws with out of range near', function() {
        expect(function() {
            Matrix4.computePerspectiveFieldOfView(1, 1, 0, 3);
        }).toThrow();
    });

    it('createPerspectiveFieldOfView throws with out of range far', function() {
        expect(function() {
            Matrix4.computePerspectiveFieldOfView(1, 1, 2, 0);
        }).toThrow();
    });

    it('static clone returns undefined without matrix parameter', function() {
        expect(Matrix4.clone(undefined)).toBeUndefined();
    });

    it('static toArray throws without matrix parameter', function() {
        expect(function() {
            Matrix4.toArray(undefined);
        }).toThrow();
    });

    it('static getElement throws without row parameter', function() {
        var row;
        var col = 0.0;
        expect(function() {
            Matrix4.getElementIndex(col, row);
        }).toThrow();
    });

    it('static getElement throws without column parameter', function() {
        var row = 0.0;
        var col;
        expect(function() {
            Matrix4.getElementIndex(col, row);
        }).toThrow();
    });

    it('static getColumn throws without matrix parameter', function() {
        expect(function() {
            Matrix4.getColumn(undefined, 1);
        }).toThrow();
    });

    it('static getColumn throws without of range index parameter', function() {
        var matrix = new Matrix4();
        expect(function() {
            Matrix4.getColumn(matrix, 4);
        }).toThrow();
    });

    it('static setColumn throws without matrix parameter', function() {
        var cartesian = new Cartesian4();
        expect(function() {
            Matrix4.setColumn(undefined, 2, cartesian);
        }).toThrow();
    });

    it('static setColumn throws without cartesian parameter', function() {
        var matrix = new Matrix4();
        expect(function() {
            Matrix4.setColumn(matrix, 1, undefined);
        }).toThrow();
    });

    it('static setColumn throws without of range index parameter', function() {
        var matrix = new Matrix4();
        var cartesian = new Cartesian4();
        expect(function() {
            Matrix4.setColumn(matrix, 4, cartesian);
        }).toThrow();
    });

    it('static getRow throws without matrix parameter', function() {
        expect(function() {
            Matrix4.getRow(undefined, 1);
        }).toThrow();
    });

    it('static getRow throws without of range index parameter', function() {
        var matrix = new Matrix4();
        expect(function() {
            Matrix4.getRow(matrix, 4);
        }).toThrow();
    });

    it('static setRow throws without matrix parameter', function() {
        var cartesian = new Cartesian4();
        expect(function() {
            Matrix4.setRow(undefined, 2, cartesian);
        }).toThrow();
    });

    it('static setRow throws without cartesian parameter', function() {
        var matrix = new Matrix4();
        expect(function() {
            Matrix4.setRow(matrix, 1, undefined);
        }).toThrow();
    });

    it('static setRow throws without of range index parameter', function() {
        var matrix = new Matrix4();
        var cartesian = new Cartesian4();
        expect(function() {
            Matrix4.setRow(matrix, 4, cartesian);
        }).toThrow();
    });

    it('static multiply throws with no left parameter', function() {
        var right = new Matrix4();
        expect(function() {
            Matrix4.multiply(undefined, right);
        }).toThrow();
    });

    it('static multiply throws with no right parameter', function() {
        var left = new Matrix4();
        expect(function() {
            Matrix4.multiply(left, undefined);
        }).toThrow();
    });

    it('static multiplyByTranslation throws with no matrix parameter', function() {
        var translation = new Cartesian3();
        expect(function() {
            Matrix4.multiplyByTranslation(undefined, translation);
        }).toThrow();
    });

    it('static multiplyByTranslation throws with no translation parameter', function() {
        var m = new Matrix4();
        expect(function() {
            Matrix4.multiplyByTranslation(m, undefined);
        }).toThrow();
    });

    it('static multiplyByUniformScale throws with no matrix parameter', function() {
        expect(function() {
            Matrix4.multiplyByUniformScale(undefined, 2.0);
        }).toThrow();
    });

    it('static multiplyByUniformScale throws with no scale parameter', function() {
        var m = new Matrix4();
        expect(function() {
            Matrix4.multiplyByUniformScale(m, undefined);
        }).toThrow();
    });

    it('static multiplyByVector throws with no matrix parameter', function() {
        var cartesian = new Cartesian4();
        expect(function() {
            Matrix4.multiplyByVector(undefined, cartesian);
        }).toThrow();
    });

    it('static multiplyByVector throws with no cartesian parameter', function() {
        var matrix = new Matrix4();
        expect(function() {
            Matrix4.multiplyByVector(matrix, undefined);
        }).toThrow();
    });

    it('static multiplyByPoint throws with no matrix parameter', function() {
        var cartesian = new Cartesian4();
        expect(function() {
            Matrix4.multiplyByPoint(undefined, cartesian);
        }).toThrow();
    });

    it('static multiplyByPoint throws with no cartesian parameter', function() {
        var matrix = new Matrix4();
        expect(function() {
            Matrix4.multiplyByPoint(matrix, undefined);
        }).toThrow();
    });

    it('static multiplyByScalar throws with no matrix parameter', function() {
        expect(function() {
            Matrix4.multiplyByScalar(undefined, 2);
        }).toThrow();
    });

    it('static multiplyByScalar throws with non-numeric scalar parameter', function() {
        var matrix = new Matrix4();
        expect(function() {
            Matrix4.multiplyByScalar(matrix, {});
        }).toThrow();
    });

    it('static negate throws without matrix parameter', function() {
        expect(function() {
            Matrix4.negate(undefined);
        }).toThrow();
    });

    it('static transpose throws without matrix parameter', function() {
        expect(function() {
            Matrix4.transpose(undefined);
        }).toThrow();
    });

    it('static equalsEpsilon throws with non-number parameter', function() {
        expect(function() {
            Matrix4.equalsEpsilon(new Matrix4(), new Matrix4(), {});
        }).toThrow();
    });

    it('static getTranslation throws without matrix parameter', function() {
        expect(function() {
            Matrix4.getTranslation(undefined);
        }).toThrow();
    });

    it('static getRotation throws without matrix parameter', function() {
        expect(function() {
            Matrix4.getRotation(undefined);
        }).toThrow();
    });

    it('static inverse throws without matrix parameter', function() {
        expect(function() {
            Matrix4.inverse(undefined);
        }).toThrow();
    });

    it('static inverse throws with non-inversable matrix', function() {
        var matrix = new Matrix4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
        expect(function() {
            Matrix4.inverse(matrix);
        }).toThrow();
    });

    it('static inverseTransformation throws without matrix parameter', function() {
        expect(function() {
            Matrix4.inverseTransformation(undefined);
        }).toThrow();
    });
});
