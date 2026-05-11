const questions = [
  {
    numQuestion: 5,
    questions: [
      {
        question: "Cá đuối chủ yếu sống ở đâu?",
        options: ["Trên trời", "Giữa nước", "Đáy biển"],
        answer: "Đáy biển"
      },
      {
        question: "Đặc điểm đặc biệt của cá đuối là:",
        options: ["Có mai cứng", "Thân dẹt như cánh", "Có vảy lớn"],
        answer: "Thân dẹt như cánh"
      },
      {
        question: "Bộ xương của cá mập được cấu tạo từ:",
        options: ["Xương cứng", "Canxi mềm", "Sụn"],
        answer: "Sụn"
      },
      {
        question: "Cá mập thường săn mồi vào thời điểm nào?",
        options: ["Ban ngày", "Ban đêm hoặc chạng vạng", "Buổi trưa"],
        answer: "Ban đêm hoặc chạng vạng"
      },
      {
        question: "Cá mập đầu búa có đặc điểm nổi bật là:",
        options: ["Đầu cắt moi", "Đầu nhọn", "Đầu hình chữ T"],
        answer: "Đầu hình chữ T"
      }
    ]
  },
  {
    numQuestion: 10,
    questions: [
      {
        question: "Cá đuối chủ yếu sống ở đâu?",
        options: ["Mặt nước", "Giữa nước", "Đáy biển"],
        answer: "Đáy biển"
      },
      {
        question: "Đặc điểm đặc biệt của cá đuối là:",
        options: ["Có mai cứng", "Có vảy lớn", "Thân dẹt như cánh"],
        answer: "Thân dẹt như cánh"
      },
      {
        question: "Bộ xương của cá mập được cấu tạo từ:",
        options: [ "Sụn","Xương cứng", "Canxi mềm"],
        answer: "Sụn"
      },
      {
        question: "Cá mập thường săn mồi vào thời điểm nào?",
        options: ["Ban ngày", "Ban đêm hoặc chạng vạng", "Buổi trưa"],
        answer: "Ban đêm hoặc chạng vạng"
      },
      {
        question: "Cá mập đầu búa có đặc điểm nổi bật là:",
        options: ["Đầu tròn", "Đầu hình chữ T", "Đầu nhọn"],
        answer: "Đầu hình chữ T"
      },
      {
        question: "Cá ngừ nổi bật với khả năng nào?",
        options: ["Bay", "Sống trên cạn", "Bơi rất nhanh"],
        answer: "Bơi rất nhanh"
      },
      {
        question: "Cá ngựa có đặc điểm đặc biệt là:",
        options: ["Con cái mang thai", "Con đực mang thai", "Không sinh sản"],
        answer: "Con đực mang thai"
      },
      {
        question: "Cá hề sống cộng sinh với loài nào?",
        options: ["Hải quỳ", "Sao biển","San hô", ],
        answer: "Hải quỳ"
      },
      {
        question: "Cá thần tiên có đặc điểm:",
        options: ["Thân cứng", "Có gai độc", "Vây dài mềm mại"],
        answer: "Vây dài mềm mại"
      },
      {
        question: "Mực đom đóm nổi bật với khả năng:",
        options: ["Bay", "Phát sáng sinh học", "Có mai"],
        answer: "Phát sáng sinh học"
      }
    ]
  },
  {
  numQuestion: 15,
  questions: [
    {
      question: "Cá đuối chủ yếu sống ở đâu?",
      options: ["Mặt nước", "Giữa nước", "Đáy biển"],
      answer: "Đáy biển"
    },
    {
      question: "Đặc điểm đặc biệt của cá đuối là:",
      options: ["Có mai cứng", "không sống dưới nước","Thân dẹt như cánh",],
      answer: "Thân dẹt như cánh"
    },
    {
      question: "Bộ xương của cá mập được cấu tạo từ:",
      options: ["Xương cứng", "Sụn", "Canxi mềm"],
      answer: "Sụn"
    },
    {
      question: "Cá mập thường săn mồi vào thời điểm nào?",
      options: ["Ban ngày", "Buổi trưa" ,"Ban đêm hoặc chạng vạng"],
      answer: "Ban đêm hoặc chạng vạng"
    },
    {
      question: "Cá mập đầu búa có đặc điểm nổi bật là:",
      options: ["Đầu tròn", "Đầu hình chữ T", "Đầu nhọn"],
      answer: "Đầu hình chữ T"
    },
    {
      question: "Cá ngừ nổi bật với khả năng nào?",
      options: [ "Bơi rất nhanh", "Bay", "Sống trên cạn"],
      answer: "Bơi rất nhanh"
    },
    {
      question: "Cá ngựa có đặc điểm đặc biệt là:",
      options: ["Con cái mang thai", "Con đực mang thai", "Không sinh sản"],
      answer: "Con đực mang thai"
    },
    {
      question: "Cá hề sống cộng sinh với loài nào?",
      options: ["San hô", "Sao biển", "Hải quỳ"],
      answer: "Hải quỳ"
    },
    {
      question: "Cá thần tiên có đặc điểm:",
      options: ["Thân cứng", "Có gai độc", "Vây dài mềm mại"],
      answer: "Vây dài mềm mại"
    },
    {
      question: "Mực đom đóm nổi bật với khả năng:",
      options: ["Bay", "Phát sáng sinh học", "Có mai"],
      answer: "Phát sáng sinh học"
    },
    {
      question: "Sứa mặt trăng dễ nhận ra nhờ:",
      options: ["Có gai", "Có 4 vòng tròn như cánh hoa", "Có sọc"],
      answer: "Có 4 vòng tròn như cánh hoa"
    },
    {
      question: "Cá tầm Đại Tây Dương có tập tính:",
      options: ["Sống trên cạn","Không di cư", "Di cư từ biển vào sông"],
      answer: "Di cư từ biển vào sông"
    },
    {
      question: "Cá mập voi ăn theo kiểu:",
      options: [ "Lọc nước","Cắn xé", "Nhai"],
      answer: "Lọc nước"
    },
    {
      question: "Cá mập voi là:",
      options: ["Động vật lớn nhất", "Cá lớn nhất thế giới", "Cá nhanh nhất"],
      answer: "Cá lớn nhất thế giới"
    },
    {
      question: "Cá voi xanh là:",
      options: ["Cá xanh nhất", "Cá lớn nhất", "Động vật lớn nhất Trái Đất"],
      answer: "Động vật lớn nhất Trái Đất"
    }
  ]
},

{
  numQuestion: 20,
  questions: [
    {
      question: "Cá đuối chủ yếu sống ở đâu?",
      options: ["Mặt nước", "Giữa nước", "Đáy biển"],
      answer: "Đáy biển"
    },
    {
      question: "Đặc điểm đặc biệt của cá đuối là:",
      options: ["Có mai cứng", "Thân dẹt như cánh", "Có vảy lớn"],
      answer: "Thân dẹt như cánh"
    },
    {
      question: "Bộ xương của cá mập được cấu tạo từ:",
      options: ["Xương cứng", "Sụn", "Canxi mềm"],
      answer: "Sụn"
    },
    {
      question: "Cá mập thường săn mồi vào thời điểm nào?",
      options: ["Ban ngày", "Ban đêm hoặc chạng vạng", "Buổi trưa"],
      answer: "Ban đêm hoặc chạng vạng"
    },
    {
      question: "Cá mập đầu búa có đặc điểm nổi bật là:",
      options: ["Đầu tròn", "Đầu hình chữ T", "Đầu nhọn"],
      answer: "Đầu hình chữ T"
    },
    {
      question: "Cá ngừ nổi bật với khả năng nào?",
      options: ["Bay", "Bơi rất nhanh", "Sống trên cạn"],
      answer: "Bơi rất nhanh"
    },
    {
      question: "Cá ngựa có đặc điểm đặc biệt là:",
      options: ["Con cái mang thai", "Con đực mang thai", "Không sinh sản"],
      answer: "Con đực mang thai"
    },
    {
      question: "Cá hề sống cộng sinh với loài nào?",
      options: ["San hô", "Hải quỳ", "Sao biển"],
      answer: "Hải quỳ"
    },
    {
      question: "Cá thần tiên có đặc điểm:",
      options: ["Thân cứng", "Vây dài mềm mại", "Có gai độc"],
      answer: "Vây dài mềm mại"
    },
    {
      question: "Mực đom đóm nổi bật với khả năng:",
      options: ["Bay", "Phát sáng sinh học", "Có mai"],
      answer: "Phát sáng sinh học"
    },
    {
      question: "Sứa mặt trăng dễ nhận ra nhờ:",
      options: ["Có gai", "Có 4 vòng tròn như cánh hoa", "Có sọc"],
      answer: "Có 4 vòng tròn như cánh hoa"
    },
    {
      question: "Cá tầm Đại Tây Dương có tập tính:",
      options: ["Không di cư", "Di cư từ biển vào sông", "Sống trên cạn"],
      answer: "Di cư từ biển vào sông"
    },
    {
      question: "Cá mập voi ăn theo kiểu:",
      options: ["Cắn xé", "Lọc nước", "Nhai"],
      answer: "Lọc nước"
    },
    {
      question: "Cá mập voi là:",
      options: ["Động vật lớn nhất", "Cá lớn nhất thế giới", "Cá nhanh nhất"],
      answer: "Cá lớn nhất thế giới"
    },
    {
      question: "Cá voi xanh là:",
      options: ["Cá lớn nhất", "Động vật lớn nhất Trái Đất", "Cá nhanh nhất"],
      answer: "Động vật lớn nhất Trái Đất"
    },
    {
      question: "Cá voi sát thủ thực chất là:",
      options: ["Cá mập", "Cá heo lớn", "Cá xương"],
      answer: "Cá heo lớn"
    },
    {
      question: "Rùa xanh có tập tính:",
      options: ["Sống trên cạn", "Không di chuyển", "Di cư và đẻ trứng trên bãi cát"],
      answer: "Di cư và đẻ trứng trên bãi cát"
    },
    {
      question: "Rùa biển Kemp là loài:",
      options: ["Phổ biến nhất", "Hiếm nhất", "Lớn nhất"],
      answer: "Hiếm nhất"
    },
    {
      question: "Thiên địch lớn nhất của nhiều loài biển là:",
      options: ["Cá nhỏ", "San hô", "Con người"],
      answer: "Con người"
    },
    {
      question: "Loài nào sống gần đáy và có thể vùi mình trong cát?",
      options: ["Cá ngừ", "Cá đuối", "Cá voi"],
      answer: "Cá đuối"
      }
    ]
  }
];