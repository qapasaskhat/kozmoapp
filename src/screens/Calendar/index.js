import * as React from 'react';
import * as RN from 'react-native';

class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDate: new Date(),
    };
  }
  months = [
    'Январь',
     'Февраль',
     'Марш',
     'Апрель',
     'Май',
     'Июнь',
     'Июль',
     'Август',
     'Сентябрь',
     'Октябрь',
     'Ноябрь',
     'Декабрь',
  ];

  weekDays = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб','вс'];
  nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  generateMatrix() {
    var year = this.state.activeDate.getFullYear();
    var month = this.state.activeDate.getMonth();

    var firstDay = new Date(year, month, 1).getDay();
    var matrix = [];
    // Create header
    matrix[0] = this.weekDays;

    var maxDays = this.nDays[month];
    // if (month == 1) {
    //   // February
    //   if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    //     maxDays += 1;
    //   }
    // }
    var counter = 1;
    for (var row = 1; row < 7; row++) {
      matrix[row] = [];
      for (var col = 0; col < 7; col++) {
        matrix[row][col] = -1;
        if (row == 1 && col >= firstDay) {
          // Fill in rows only after the first day of the month
          matrix[row][col] = counter++;
        } else if (row > 1 && counter <= maxDays) {
          // Fill in rows only if the counter's not greater than
          // the number of days in the month
          matrix[row][col] = counter++;
        }
      }
    }

    return matrix;
    // More code here
  }
  _onPress = (item) => {    
    this.setState(() => {
      if (!item.match && item != -1) {
        this.state.activeDate.setDate(item);
        return this.state;
      }
    });
};
  render() {
      const {day, count} = this.props
    var matrix = this.generateMatrix();
    var rows = [];
    rows = matrix.map((row, rowIndex) => {
      var rowItems = row.map((item, colIndex) => {
        return (
            <RN.View style={{
                flex: 1,
                height: 30,
                backgroundColor: item == this.state.activeDate.getDate() ? '#000' : '#fff',
                paddingVertical:4,
                borderRadius: 6,
                }}>
          <RN.Text
            style={{
              flex: 1,
              height: 24,
              textAlign: 'center',
              // Highlight header
              
              // Highlight Sundays
              color: rowIndex == 0 ? '#B0B0B0' : '#000' && item == this.state.activeDate.getDate() ? '#fff' : '#000',
              // Highlight current date
              fontWeight: item == this.state.activeDate.getDate() ? 'bold' : '200',
              fontSize: 16,
              
            }}
            onPress={() => this._onPress(item)}>
            {item != -1 ? item : ''}
          </RN.Text>
        {item != -1 && rowIndex !== 0 ? (<RN.Text style={{fontSize: 8,position: 'absolute', top: 0, right: 5,color: '#6FC716',fontWeight: '600'}}>{
            item === day && 3 
        }</RN.Text>) : null}
          </RN.View>
        );
      });
      return (
        <RN.View
          style={{
            flex: 1,
            flexDirection: 'row',
            padding: 15,
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          {rowItems}
        </RN.View>
      );
    });
    return (
      <RN.SafeAreaView >
        <RN.Text
          style={{
            fontWeight: '300',
            fontSize: 14,
            marginLeft: 30,
            textTransform: 'uppercase'
          }}>
          {this.months[this.state.activeDate.getMonth()]} &nbsp;
          {this.state.activeDate.getFullYear()}
        </RN.Text>
        {rows}
      </RN.SafeAreaView>
    );
  }
}

export default index;
